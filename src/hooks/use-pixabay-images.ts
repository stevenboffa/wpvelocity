import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface PixabayImage {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  user: string;
}

interface PixabayResponse {
  hits: PixabayImage[];
  total: number;
  totalHits: number;
}

export const usePixabayImages = (query: string = "wordpress hosting", per_page: number = 3) => {
  return useQuery({
    queryKey: ['pixabay-images', query, per_page],
    queryFn: async (): Promise<PixabayImage[]> => {
      const { data, error } = await supabase.functions.invoke('fetch-pixabay-images', {
        body: { query, per_page }
      });

      if (error) throw error;
      return (data as PixabayResponse).hits;
    }
  });
};