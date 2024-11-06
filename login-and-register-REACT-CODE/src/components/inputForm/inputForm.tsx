import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const BlogForm = () => {

  const formSchema = z.object({
    username: z.string().min(5, { message: "O nome deve conter no mínimo 5 caracteres" }).max(20, { message: "O nome deve conter no máximo 20 caracteres" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "O nome deve conter no mínimo 8 caracteres" }).max(20, { message: "O nome deve conter no máximo 20 caracteres" }),
    confirmPassword: z.string().min(8, { message: "O nome deve conter no mínimo 8 caracteres" }).max(20, { message: "O nome deve conter no máximo 20 caracteres" })
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

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Confirme a Senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">ENTRAR</Button>
          <p className="text-ghostWhite">Não possui cadastro, <a className="text-red" href="">Clique Aqui</a></p>
        </form>
      </Form>
    </>
  )
}

export default BlogForm