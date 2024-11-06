import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const BlogForm = () => {
    
    const formSchema = z.object({
        username: z.string().min(5, {message: "O nome deve conter no mínimo 5 caracteres"}).max(20, {message: "O nome deve conter no máximo 20 caracteres"}),
        email: z.string().email(),
        password: z.string().min(8, {message: "O nome deve conter no mínimo 8 caracteres"}).max(20, {message: "O nome deve conter no máximo 20 caracteres"}),
        confirmPassword: z.string().min(8, {message: "O nome deve conter no mínimo 8 caracteres"}).max(20, {message: "O nome deve conter no máximo 20 caracteres"})
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        
        console.log(values)
      }
}

export default BlogForm