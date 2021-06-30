const Conference = require('../models/conferenceModel');

const createConference = async (req, res) => {
    if (req.body) {
        const conference = new Conference(req.body);
        conference.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

module.exports = {
    createConference
};
