import { supabase } from "../lib/supabase";

export async function getWorks() {
  const { data, error } = await supabase
    .from("works")
    .select("*")

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
