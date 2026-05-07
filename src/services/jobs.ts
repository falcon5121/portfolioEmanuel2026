import { supabase } from "../lib/supabase";

export async function getJobs() {
    const { data, error } = await supabase.from('jobs').select("*")

    if(error) {
        console.error(error);
        return []
    }
    return data
}