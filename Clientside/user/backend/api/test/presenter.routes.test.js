const axios = require("axios");

describe("POST @ /presenters endpoint", () => {
	it("should create a presenter and return an id", async () => {
		try {
			const res = axios.post("http://localhost:5000/presenters", {
				username: "chamath123",
				firstName: "Chamath",
				email: "chamath@gmail.com",
				lastName: "Heshan",
				password: "chamath123",
				university: "SLIIT",
				department: "DS",
				contactNumber: "0777343434",
			});

			expect(res.status).toEqual(200);
		} catch (error) {
			console.log(error);
		}
	});
});
