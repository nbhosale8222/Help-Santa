import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jjntfvxtwnnqecanzigp.supabase.co";
const supabaseKey = "sb_publishable_lrtTZpBTfiqi7Gz04VfS-w_zDiveRMF";

export const supabase = createClient(supabaseUrl, supabaseKey);
