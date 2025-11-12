import { supabase } from '@/lib/supabase'

export default async function TestPage() {
  // Test connection
  const { data, error } = await supabase.from('profiles').select('*')
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Supabase Connection Test</h1>
      {error ? (
        <div className="text-red-500">
          ❌ Connection Failed: {error.message}
        </div>
      ) : (
        <div className="text-green-500">
          ✅ Connected Successfully! Found {data?.length} profiles
        </div>
      )}
    </div>
  )
}