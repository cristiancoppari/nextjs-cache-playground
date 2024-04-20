declare namespace NodeJS {
  interface ProcessEnv {
    API_URL: string;
    API_KEY: string;

    SUPABASE_USER: string;
    SUPABASE_URL: string;
    SUPABASE_HOST: string;
    SUPABASE_PASSWORD: string;
    SUPABASE_DB_NAME: string;

    CONTENTFUL_BASE_URL: string;
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_ACCESS_PREVIEW_TOKEN: string;
    CONTENTFUL_ACCESS_DELIVERY_TOKEN: string;
    CONTENTFUL_ENTRY_ID: string;

    NEON_DATABASE_URL: string;
  }
}
