const mongoose = require('mongoose');
const Admin = require('../models/adminModel');
const adminData = { fname: 'jon', lname: 'snow', email: 'jonsnow@gmail.com', passwordHash: '1234qwer' };

describe('Admin Model Test', () => {

    // It's just so easy to connect to the MongoDB Memory Server 
    // By using mongoose.connect
    beforeAll(async () => {
        process.env.MDB_CONNECT_STRING,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        };
    });

    it('create & save admin successfully', async () => {
        const validAdmin = new Admin(adminData);
        const savedAdmin = await validAdmin.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedAdmin._id).toBeDefined();
        expect(savedAdmin.fname).toBe(adminData.name);
        expect(savedAdmin.lname).toBe(adminData.gender);
        expect(savedAdmin.email).toBe(adminData.dob);
        expect(savedAdmin.passwordHash).toBe(adminData.passwordHash);
    });


    // Test Validation is working!!!
    // It should us told us the errors in on last name field.
    it('create admin without required field should failed', async () => {
        const adminWithoutRequiredField = new Admin({ fname: 'jon' });
        let err;
        try {
            const savedAdminWithoutRequiredField = await adminWithoutRequiredField.save();
            error = savedAdminWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.lname).toBeDefined();
    });

})