import { useState } from "react";

const App = () => {

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [role, setRole] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [companyPic, setCompanyPic] = useState("");

	return (
		<div className="container mt-3">
			<div className="row">
				<div className="col-md-8">
					{/* FORM */}
					<form>
						<div className="row g-3 row-cols-2">
							<div className="col">
								<input
									className="form-control"
									placeholder="Nome"
									type="text"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</div>
							<div className="col">
								<input
									className="form-control"
									placeholder="Cognome"
									type="text"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>
							</div>
							<div className="col">
								<input
									className="form-control"
									placeholder="Azienda"
									type="text"
									value={companyName}
									onChange={(e) => setCompanyName(e.target.value)}
								/>
							</div>
							<div className="col">
								<input
									className="form-control"
									placeholder="Ruolo"
									type="text"
									value={role}
									onChange={(e) => setRole(e.target.value)}
								/>
							</div>
							<div className="col">
								<input
									className="form-control"
									placeholder="Email"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="col">
								<input
									className="form-control"
									placeholder="Telefono"
									type="tel"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
						</div>
						<input
							className="form-control mt-3"
							placeholder="Logo Azienda"
							type="url"
							value={companyPic}
							onChange={(e) => setCompanyPic(e.target.value)}
						/>
					</form>
				</div>

				{/* COLONNA DESTRA */}
				<div className="col-md-4">

					{/* BUSINESS CARD */}
					<div className="card h-100">
						<div className="card-header">{companyName}</div>
						<div className="card-body">
							<div className="row row-cols-2">
								<div className="col">
									<blockquote className="blockquote mb-0">
										<p>
											{firstName} {lastName}
										</p>
										<footer className="blockquote-footer">
											<cite title={role}>{role}</cite>
										</footer>
									</blockquote>
									<ul className="list-unstyled">
										<li><i className="bi bi-telephone-fill"></i> {phone}</li>
										<li><i className="bi bi-envelope-at"></i> {email}</li>
									</ul>
								</div>
								<div className="col">
									<img
										className="img-fluid"
										src={companyPic}
										alt={companyName}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App
