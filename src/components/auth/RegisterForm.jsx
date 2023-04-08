import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useSelector } from "react-redux"
import { LoadingButton } from "@mui/lab"
import { Link } from "react-router-dom"
import { object, string } from "yup"
import { Form } from "formik"

export const registerScheme = object({
  email: string()
    .email("Lutfen valid bir email giriniz")
    .required("Email zorunludur"),
  password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(30, "password en fazla 30 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
  password2: string()
    .required("password zorunludur")
    .test("password-match", "Passwords do not match", function (value) {
      return this.parent.password === value
    })
    .min(8, "password en az 8 karakter olmalıdır")
    .max(30, "password en fazla 30 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
  last_name: string().min(1).max(50).matches(/[a-z]/).required(),
  first_name: string().min(1).max(50).matches(/[a-z]/).required(),
  username: string().min(6).matches(/[a-z]/).required(),
  image: string().url(),
  bio: string().min(8),
})
const RegisterForm = ({
  values,
  handleBlur,
  touched,
  errors,
  handleChange,
}) => {
  const { loading } = useSelector((state) => state.auth)
  console.log(loading);

  return (
    <Form>
      <Box sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          type="text"
          autoComplete="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.username && errors.username}
          error={touched.username && Boolean(errors.username)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="first_name"
          label="First Name"
          name="first_name"
          type="text"
          autoComplete="first_name"
          value={values.first_name}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.first_name && errors.first_name}
          error={touched.first_name && Boolean(errors.first_name)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="last_name"
          label="Last Name"
          name="last_name"
          type="text"
          autoComplete="last_name"
          value={values.last_name}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.last_name && errors.last_name}
          error={touched.last_name && Boolean(errors.last_name)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email Address"
          type="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email && errors.email}
          error={touched.email && Boolean(errors.email)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password2"
          label="Password"
          type="password"
          id="password2"
          value={values.password2}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="image"
          label="Image"
          name="image"
          type="url"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.image && errors.image}
          error={touched.image && Boolean(errors.image)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="bio"
          label="Bio"
          type="text"
          id="bio"
          value={values.bio}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.bio && errors.bio}
          error={touched.bio && Boolean(errors.bio)}
        />
        <LoadingButton
          type="submit"
          loading={loading}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </LoadingButton>
        <Grid container>
          <Grid item>
            <Link to="/login" variant="body2">
              {"Do you already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Form>
  )
}

export default RegisterForm
