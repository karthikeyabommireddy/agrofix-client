// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ckrjkxninninxjmucxbh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrcmpreG5pbm5pbnhqbXVjeGJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNTM2ODQsImV4cCI6MjA2MDcyOTY4NH0.BdpPJpB4rQi_d9nohtDRJorwDHfbMQwEsZPtTop_PGM'

export const supabase = createClient(supabaseUrl, supabaseKey)
