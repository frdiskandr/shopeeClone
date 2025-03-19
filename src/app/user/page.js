const { cookies } = require("next/headers")

async function UserPage() {
    const user = await cookies()
    user.get('session')
    return (
        <div>
            <h1>Halaman User</h1>
        </div>
    )
}

export default UserPage;