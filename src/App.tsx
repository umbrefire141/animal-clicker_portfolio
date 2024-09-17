import { useEffect, useState } from 'react';
import Loading from './components/shared/Loading/Loading';
import Router from './Router';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 5000);
	}, []);

	if (isLoading) return <Loading />;

	return (
		<>
			<Router />
		</>
	);
}

export default App;
