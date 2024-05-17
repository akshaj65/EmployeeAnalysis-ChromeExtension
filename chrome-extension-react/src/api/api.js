// import patientsHealth from '../assets/patientsHealth.json'

// const jsonFile = patientsHealth;


// export async function getPatientsHealthFromStorAge() {
//     return new Promise((resolve, reject) => {
//         chrome.storAge.local.get('patientsHealth', function (data) {
//             if (chrome.runtime.lastError) {
//                 reject(chrome.runtime.lastError);
//             } else {
//                 const patientsHealth = data.patientsHealth;
//                 resolve(patientsHealth);
//             }
//         });
//     });
// }


export const fetchPatients = async () => {
    try {
        const res = await fetch(chrome.extension.getURL('/patientsHealth.json'))
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const patients = await res.json();
        return patients;
    } catch (error) {
        console.log('Error Fetching Patients', error);
        throw error;
    }
}


export const getpatientsByFirstName = async (firstName) => {
    try {
        const patients = await fetchPatients();

        if (!patients) {
            throw new Error("Patients Not found");
        }
        const patientsWithSameFirstName = patients.filter((patient) => patient.FirstName.toLowerCase() === firstName.toLowerCase());

        return patientsWithSameFirstName;

    } catch (error) {
        console.log('Error Fetching Patients', error);
        throw error;
    }
}


export const getPatientFields = (async (queryFields) => {
    try {

        const patients = await fetchPatients();
        if (!patients) {
            throw new Error("Patients Not found");
        }

        const fields = Object.keys(patients[0]);


        const fieldsArray = queryFields.split(',').map(field => field.trim());

        const projection = {};
        fieldsArray.forEach(field => {
            if (fields.includes(field))
                projection[field] = 1;
        });

        const patientsWithSelectedFields = patients.map(patient => {
            const selectedFields = {};
            Object.keys(projection).forEach(field => {
                selectedFields[field] = patient[field];
            });
            return selectedFields;
        });

        if (!patientsWithSelectedFields || patientsWithSelectedFields.length === 0) {
            throw new Error("Patients Not found");
        }
        return patientsWithSelectedFields;
    } catch (error) {
        console.log('Error Fetching Patients', error);
        throw error;
    }
});

export const getAgeDistributionPatients = async () => {
    try {

        const patients = await fetchPatients();
        if (!patients) {
            throw new Error("Patients Not found");
        }

        let labels = { '18-25': 0, '26-35': 1, '36-45': 2, '46-55': 3, '56+': 4 };
        let data = [0, 0, 0, 0, 0];

        patients.forEach(patient => {
            if (patient.Age >= 18 && patient.Age <= 25) {
                data[labels['18-25']] += 1;
            } else if (patient.Age >= 26 && patient.Age <= 35) {
                data[labels['26-35']] += 1;
            } else if (patient.Age >= 36 && patient.Age <= 45) {
                data[labels['36-45']] += 1;
            } else if (patient.Age >= 46 && patient.Age <= 55) {
                data[labels['46-55']] += 1;
            } else if (patient.Age >= 56) {
                data[labels['56+']] += 1;
            }
        });

        labels = Object.keys(labels)
        const dataSet = {
            labels,
            data
        }

        return dataSet;
    } catch (error) {
        console.log('Error Fetching Patients', error);
        throw error;
    }
};