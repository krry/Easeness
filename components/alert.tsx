import cn from 'classnames';

import Container from './container';

const Alert = ({ preview }) => {
	return (
		<div
			className={cn({
				'border-b bg-cyan-300 border-cyan-600 text-white': preview,
			})}
		>
			<Container>
				<div className="py-2 text-center text-md">
					{preview && (
						<>
							<a
								href="/api/exit-preview"
								className="underline transition-colors duration-200 hover:text-cyan"
							>
								Exit preview mode
							</a>
						</>
					)}
				</div>
			</Container>
		</div>
	);
};

export default Alert;
