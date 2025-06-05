import TextEditor from '@components/Blocks/TextEditor'
import styles from '@styles/components/VerificationPage/LoginPage.module.scss'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { signIn, getSession } from 'next-auth/react'


const Login = () => {
	const { t } = useTranslation()
	const [loginDetails, setLoginDetails] = useState({
		email: '',
		password: '',
	}) // Descriptive names
        const [serverMessage, setServerMessage] = useState('')
        const navigate = useNavigate()
	const [passwordVisible, setPasswordVisible] = useState(false)

	const textEditorOnChange = ({ name, value }) => {
		setLoginDetails((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setServerMessage('')

                try {
                        const res = await signIn('credentials', {
                                redirect: false,
                                email: loginDetails.email,
                                password: loginDetails.password,
                        })

                        if (res?.error) {
                                setServerMessage(res.error)
                        } else {
                                const session = await getSession()
                                if (session?.user?.role === 'ADMIN') {
                                        navigate('/admin/dashboard')
                                } else {
                                        navigate('/profile')
                                }
                        }
                } catch (error) {
                        setServerMessage('An error occurred during login.')
                }
	}

	const handleSignUPLinkClick = () => {
		navigate('/SignUP')
	}

	const togglePasswordVisibility = () => {
		setPasswordVisible((prevVisible) => !prevVisible)
	}

	return (
		<div className={styles.LoginContainer}>
			<header className={styles.LoginWrapper}>
				<h1>{t('Вхід')}</h1>
				{/* Render serverMessage here */}
				{serverMessage && (
					<p className={styles.ErrorMessage}>{serverMessage}</p>
				)}
				<form className={styles.LoginForm} onSubmit={handleSubmit}>
					<TextEditor
						label="Email"
						type="email"
						name="email"
						value={loginDetails.email}
						maxLength="191"
						onChange={textEditorOnChange}
						required
					/>
					<TextEditor
						label={t('Пароль')}
						type={passwordVisible ? 'text' : 'password'}
						name="password"
						value={loginDetails.password}
						maxLength="191"
						onChange={textEditorOnChange}
						required
						togglePasswordVisibility={togglePasswordVisibility}
						passwordVisible={passwordVisible}
					/>
					<button type="submit">{t('Увійти')}</button>
				</form>
				<p className={styles.SignUp} onClick={handleSignUPLinkClick}>
					{t('Реєстрація')}
				</p>
			</header>
		</div>
	)
}

export default Login
