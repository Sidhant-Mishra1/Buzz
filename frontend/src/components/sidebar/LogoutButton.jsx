import { SlLogout } from "react-icons/sl";
// import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	// const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{/* {!loading ? (
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)} */}
            <SlLogout />

		</div>
	);
};
export default LogoutButton;