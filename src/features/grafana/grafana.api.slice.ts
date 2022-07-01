import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const GRAFANA_BEARER_API_KEY =
  'eyJrIjoiM2FZcUVGMEJzSjgzVDlQM3FBS1pFZnlXMUVFR0Q0eDMiLCJuIjoiRGF0YUNhbGwiLCJpZCI6MX0=';

interface GrafanaData {
  id: number;
  uid: string;
  title: string;
  uri: string;
  url: string;
  slug: string;
  type: string;
  tags: string[];
  isStarred: boolean;
  folderId?: number;
  folderUid?: string;
  folderTitle?: string;
  folderUrl?: string;
  sortMeta: number;
}
// econoc.grafana.net/api/search?query=&starred=false&skipRecent=true&skipStarred=true&folderIds=0&layout=folders&prevSort=null&limit=5
// https://econoc.grafana.net/api/search?query=&limit=5
export const grafanaApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://econoc.grafana.net/api',
    prepareHeaders(headers) {
      headers.set('authorization', `Bearer ${GRAFANA_BEARER_API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGrafanaData: builder.query<GrafanaData[], number | void>({
      query() {
        return {
          url: 'search',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetGrafanaDataQuery } = grafanaApiSlice;
