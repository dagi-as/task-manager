import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { User, CheckCircle } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Welcome back, {session.user.email?.split('@')[0]}!
              </h1>
              <p className="text-gray-600 mt-1">Manage your tasks efficiently</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow border p-6">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Authentication Complete</p>
                  <p className="text-gray-600 text-sm">
                    You're logged in as: {session.user.email}
                  </p>
                </div>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-700">
                  Next, we'll build the task management features. You can now:
                </p>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    Create, read, update, and delete tasks
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    Set due dates and priorities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    Organize tasks by categories
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">Ready to start building</p>
                <p className="text-2xl font-bold text-blue-900 mt-1">Task Manager</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700">Authentication Status</p>
                <p className="text-lg font-medium text-green-900 mt-1">✅ Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}