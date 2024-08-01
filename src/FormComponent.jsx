
import { FormGroup } from "./FormGroup"
import ReactSelect from "react-select"
import { useController, useForm } from "react-hook-form"

const COUNTRY_OPTIONS = [
    { label: "United States", value: "US" },
    { label: "India", value: "IN" },
    { label: "Mexico", value: "MX" },
]

export default function FormComponent() {
    const { register, handleSubmit, formState: { errors }, control,} = useForm()

    // useController is for controlled inputs
    const { field: countryField } = useController({
        name: "country",
        control,
        rules: { required: { value: true, message: "Required" } },
    })

    function onSubmit(data) {
        console.log(data)
        alert("Success")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            {/* Email */}
            <FormGroup errorMessage={errors?.email?.message}>
                <label className="label" htmlFor="email">
                    Email
                </label>
                <input
                    className="input"
                    type="email"
                    id="email"
                    {...register("email", {
                        required: { value: true, message: "Required" },
                        validate: (value) => {
                            if (!value.endsWith("@axelerant.com")) {
                                return "Must end with @axelerant.com"
                            }
                        },
                    })}
                />
            </FormGroup>
            {/* Password */}
            <FormGroup errorMessage={errors?.password?.message}>
                <label className="label" htmlFor="password">
                    Password
                </label>
                <input
                    className="input"
                    type="password"
                    id="password"
                    {...register("password", {
                        required: { value: true, message: "Required" },
                        minLength: {
                            value: 10,
                            message: "Must Be 10 characters or longer",
                        },
                        validate: {
                            hasLowerCase: (value) => {
                                if (!value.match(/[a-z]/)) {
                                    return "Must include a lowercase letter"
                                }
                            },
                            hasUpperCase: (value) => {
                                if (!value.match(/[A-Z]/)) {
                                    return "Must include an uppercase letter"
                                }
                            },
                            hasNumber: (value) => {
                                if (!value.match(/[0-9]/)) {
                                    return "Must include a number"
                                }
                            },
                        },
                    })}
                />
            </FormGroup>
            {/* Country */}
            <FormGroup errorMessage={errors?.country?.message}>
                <label className="label" htmlFor="country">
                Country
                </label>
                <ReactSelect
                    isClearable
                    classNamePrefix="react-select"
                    id="country"
                    options={COUNTRY_OPTIONS}
                    {...countryField}
                />
            </FormGroup>
            <button className="btn" type="submit">Submit</button>
        </form>
    )
}