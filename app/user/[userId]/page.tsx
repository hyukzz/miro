interface UserIdPageProps {
  params: {
    userId: string
  }
}

function Page({ params }: UserIdPageProps) {
  return (
    <div>
      <h1>User ID: {params.userId}</h1>
    </div>
  )
}

export default Page
