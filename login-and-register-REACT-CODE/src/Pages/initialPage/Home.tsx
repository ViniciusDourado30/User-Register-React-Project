import BlogForm from "@/components/inputForm/inputForm"

const HomePage = () => {

    return (
        <>
            <div className="w-full h-screen bg-soundBackground bg-cover bg-no-repeat flex justify-center items-center">
                <div className="w-1/3 h-2/3 bg-black rounded-xl backdrop-blur-sm flex justify-center items-center flex-col gap-10">
                        <h2 className="text-ghostWhite font-bold text-2xl uppercase">Login</h2>
                        <BlogForm/>
                </div>
            </div>
        </>
    )
}

export default HomePage