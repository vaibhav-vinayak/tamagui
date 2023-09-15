
import { TRPCError } from '@trpc/server'
import { createTRPCRouter, protectedProcedure } from '../trpc'


export const meRouter = createTRPCRouter({
  profile: protectedProcedure.query(async ({ ctx: { supabase, session } }) => {
    const { data, error } = await supabase.from('profiles').select('*').eq('id', session.user.id).single()
    if (error) {
      // no rows - edge case of user being deleted
      if (error.code === 'PGRST116') {
        await supabase.auth.signOut()
        return null
      }
      throw new Error(error.message)
    }
    return data
  }),
  climbs: protectedProcedure.query(async ({ ctx: { supabase, session } }) => {

    const { data: profileClimbData, error } = await supabase.from('profile_climbs').select(`*, climb:climbs(*)`).eq('profile_id', session.user.id)
    const { data: profiles } = await supabase.from('profiles').select('*')


    if (error) {
      throw new TRPCError({ code: error?.code as any, message: error.message })


    }
    return profileClimbData?.map((profileClimb) => {
      return {
        ...profileClimb,
        climb: Array.isArray(profileClimb.climb) ? profileClimb.climb[0] : profileClimb.climb
      };
    }).map((profileClimb) => {
      const climb = profileClimb.climb
      const profile = profiles?.find(profile => profile.id === climb?.created_by)
      return {
        ...profileClimb,
        climb,
        profile,
      }
      // This should probably be done in the query
    }).filter(c => {
      return c.climb?.start > new Date().toISOString()
    }).sort((a, b) => {
      if (a.climb?.start < b.climb?.start) {
        return -1
      } else if (a.climb?.start > b.climb?.start) {
        return 1
      }
      return 0
    })
  }),
})