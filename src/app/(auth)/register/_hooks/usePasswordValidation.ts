export const usePasswordValidation = (password: string) => {
  const hasMinLength = password.length >= 8
  const hasLowercase = /[a-z]/.test(password)
  const hasUppercase = /[A-Z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*]/.test(password)

  const meetsAllCriteria =
    hasMinLength &&
    [hasLowercase, hasUppercase, hasNumber, hasSpecialChar].filter(Boolean)
      .length >= 3

  return {
    hasMinLength,
    hasLowercase,
    hasUppercase,
    hasNumber,
    hasSpecialChar,
    meetsAllCriteria,
  }
}
