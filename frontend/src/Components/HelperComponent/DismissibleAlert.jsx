import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function DismissibleAlert({ title, message, variant = "danger" }) {
	const [show, setShow] = useState(true);

	if (show && title) {
		return (
			<Alert variant={variant} onClose={() => setShow(false)}>
				{message ? (
					<>
						<Alert.Heading>{title}</Alert.Heading>
						<p>{message}</p>
					</>
				) : (
					title
				)}
			</Alert>
		);
	}
}

export default DismissibleAlert;
