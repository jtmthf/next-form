import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormRoot,
  FormSubmit,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "./login-action";

export function LoginForm() {
  return (
    <FormRoot action={login}>
      <FormField name="email">
        <FormLabel>Email</FormLabel>
        <FormControl asChild>
          <Input type="email" required />
        </FormControl>
        <FormMessage match="valueMissing">Please enter your email.</FormMessage>
        <FormMessage match="typeMismatch">
          Please provide a valid email.
        </FormMessage>
      </FormField>
      <FormField name="password">
        <FormLabel>Password</FormLabel>
        <FormControl asChild>
          <Input type="password" required />
        </FormControl>
        <FormMessage match="valueMissing">
          Please enter your password.
        </FormMessage>
      </FormField>
      <FormSubmit>Log in</FormSubmit>
    </FormRoot>
  );
}
