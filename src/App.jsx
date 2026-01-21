import { useState } from "react";

const App = () => {

	/*
	Versione con oggetto:
	- 7 input
	- 1 solo state (oggetto) che ha 7 proprietà
	- ogni input legge il suo value da una proprietà dello state con
		<input value={oggetto.proprietà} />
	- ogni input deve avere un "name" uguale al nome della proprietà
		<input value={oggetto.proprietà} name="proprietà" />
	- ogni input, quando cambia, riscrive l'oggetto aggiornato nello state
		<input value={oggetto.proprietà} name="proprietà" onChange={aggiornaBiglietto} />
	- la funzione prende i dati dell'evento: il name dell'input e cosa l'utente ci ha scritto.
	fa una copia degli attuali dati del biglietto (non può modificarli direttamente).
	aggiorna questi dati e li usa per riscrivere lo state (v. codice funzione in basso)
	*/

	const [datiBiglietto, setDatiBiglietto] = useState({
		firstName: "Luca",
		lastName: "Lambiase",
		companyName: "Boolean",
		role: "",
		email: "",
		phone: "",
		companyPic: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
	});

	function aggiornaBiglietto(event) {

		console.log("Ricevuto evento da input --> ", event.target); //controllate cosa stampa per capire meglio i prossimi due passaggi

		const key = event.target.name;
		const value = event.target.value;

		console.log(`Devo scrivere "${value}" in "datiBiglietto.${key}"`);

		const nuovoBiglietto = { ...datiBiglietto }; //copio oggetto
		nuovoBiglietto[key] = value; //aggiorno il campo con il nuovo valore
		setDatiBiglietto(nuovoBiglietto); //scrivo l'oggetto aggiornato nello state
	}

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
									name="firstName"
									value={datiBiglietto.firstName}
									onChange={aggiornaBiglietto}
								/>
							</div>
							<div className="col">
								<input
									className="form-control"
									placeholder="Cognome"
									type="text"
									name="lastName"
									value={datiBiglietto.lastName}
									onChange={aggiornaBiglietto}
								/>
							</div>
							<div className="col">
								<input
									className="form-control"
									placeholder="Azienda"
									type="text"
									name="companyName"
									value={datiBiglietto.companyName}
									onChange={aggiornaBiglietto}
								/>
							</div>
							<div className="col">
								<input
									className="form-control"
									placeholder="Ruolo"
									type="text"
									name="role"
									value={datiBiglietto.role}
									onChange={aggiornaBiglietto}
								/>
							</div>
							<div className="col">
								<input
									className="form-control"
									placeholder="Email"
									type="email"
									name="email"
									value={datiBiglietto.email}
									onChange={aggiornaBiglietto}
								/>
							</div>
							<div className="col">
								<input
									className="form-control"
									placeholder="Telefono"
									type="tel"
									name="phone"
									value={datiBiglietto.phone}
									onChange={aggiornaBiglietto}
								/>
							</div>
						</div>
						<input
							className="form-control mt-3"
							placeholder="Logo Azienda"
							type="url"
							name="companyPic"
							value={datiBiglietto.companyPic}
							onChange={aggiornaBiglietto}
						/>
					</form>
				</div>

				{/* COLONNA DESTRA */}
				<div className="col-md-4">

					{/* BUSINESS CARD */}
					<div className="card h-100">
						<div className="card-header">{datiBiglietto.companyName}</div>
						<div className="card-body">
							<div className="row row-cols-2">
								<div className="col">
									<blockquote className="blockquote mb-0">
										<p>
											{datiBiglietto.firstName} {datiBiglietto.lastName}
										</p>
										<footer className="blockquote-footer">
											<cite title={datiBiglietto.role}>{datiBiglietto.role}</cite>
										</footer>
									</blockquote>
									<ul className="list-unstyled">
										<li><i className="bi bi-telephone-fill"></i> {datiBiglietto.phone}</li>
										<li><i className="bi bi-envelope-at"></i> {datiBiglietto.email}</li>
									</ul>
								</div>
								<div className="col">
									<img
										className="img-fluid"
										src={datiBiglietto.companyPic}
										alt={datiBiglietto.companyName}
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
