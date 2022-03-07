import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_APP || "";
const supabaseServerKey = process.env.NEXT_PUBLIC_SUPABASE_SECRET || "";

export default function useSupabase() {
  const supabaseClient = createClient(supabaseUrl, supabaseServerKey);

  return { supabaseClient };
}
