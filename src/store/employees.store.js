export default {
    namespaced: true,
    state: {
        employees: [
            {
                name: "Geno Wilby",
                email: "gwilby0@soundcloud.com",
                gender: "Male",
                designation: "Developer I",
                phone: "474-476-7259",
                status: "active",
            },
            {
                name: "Niko Mattacks",
                email: "nmattacks1@webnode.com",
                gender: "Female",
                designation: "Mechanical Systems Engineer",
                phone: "964-103-3518",
                status: "active",
            },
            {
                name: "Stu Andrieux",
                email: "sandrieux2@merriam-webster.com",
                gender: "Male",
                designation: "Human Resources Manager",
                phone: "921-490-1015",
                status: "active",
            },
            {
                name: "Bria Limpkin",
                email: "blimpkin3@cmu.edu",
                gender: "Female",
                designation: "Quality Engineer",
                phone: "923-398-9988",
                status: "active",
            },
            {
                name: "Oona Bartke",
                email: "obartke4@chronoengine.com",
                gender: "Male",
                designation: "Information Systems Manager",
                phone: "728-518-5218",
                status: "active",
            },
            {
                name: "Chelsey Kunrad",
                email: "ckunrad5@netscape.com",
                gender: "Female",
                designation: "Programmer Analyst I",
                phone: "366-384-0008",
                status: "active",
            },
            {
                name: "Basilio Joblin",
                email: "bjoblin6@dropbox.com",
                gender: "Female",
                designation: "Media Manager IV",
                phone: "964-958-4118",
                status: "active",
            },
            {
                name: "Leta Powlesland",
                email: "lpowlesland7@fotki.com",
                gender: "Female",
                designation: "Geological Engineer",
                phone: "294-709-2226",
                status: "active",
            },
            {
                name: "Granger Shawyer",
                email: "gshawyer8@aboutads.info",
                gender: "Female",
                designation: "Design Engineer",
                phone: "894-229-1968",
                status: "active",
            },
            {
                name: "Kalila Baccup",
                email: "kbaccup9@csmonitor.com",
                gender: "Female",
                designation: "Pharmacist",
                phone: "402-834-0723",
                status: "active",
            },
            {
                name: "Lucille Mitrikhin",
                email: "lmitrikhina@hostgator.com",
                gender: "Male",
                designation: "Office Assistant I",
                phone: "592-359-9058",
                status: "active",
            },
            {
                name: "Tabby Higgonet",
                email: "thiggonetb@tamu.edu",
                gender: "Male",
                designation: "Programmer II",
                phone: "894-355-6801",
                status: "active",
            },
            {
                name: "Tammi Chuney",
                email: "tchuneyc@woothemes.com",
                gender: "Female",
                designation: "Nurse Practicioner",
                phone: "823-154-6640",
                status: "active",
            },
            {
                name: "Othello Gerram",
                email: "ogerramd@parallels.com",
                gender: "Female",
                designation: "Software Consultant",
                phone: "781-264-9535",
                status: "active",
            },
            {
                name: "Caressa Redmire",
                email: "credmiree@naver.com",
                gender: "Male",
                designation: "Engineer I",
                phone: "474-235-3953",
                status: "active",
            },
            {
                name: "Nadiya Ebanks",
                email: "nebanksf@washington.edu",
                gender: "Male",
                designation: "Internal Auditor",
                phone: "575-881-4169",
                status: "active",
            },
            {
                name: "Trenna Newton",
                email: "tnewtong@samsung.com",
                gender: "Male",
                designation: "Compensation Analyst",
                phone: "707-423-0501",
                status: "active",
            },
            {
                name: "Sabina Chiechio",
                email: "schiechioh@nih.gov",
                gender: "Female",
                designation: "Chemical Engineer",
                phone: "424-120-2921",
                status: "active",
            },
            {
                name: "Patti Daynter",
                email: "pdaynteri@dedecms.com",
                gender: "Male",
                designation: "Staff Accountant III",
                phone: "850-449-0522",
                status: "active",
            },
            {
                name: "Alfred Hamon",
                email: "ahamonj@netlog.com",
                gender: "Male",
                designation: "Food Chemist",
                phone: "809-488-3818",
                status: "active",
            },
        ]


    },
    getters: {

        employeesList: (state) => state.employees
    },

    mutations: {
        ADD_EMPLOYEE(state, payload) {
            state.employees.push(payload);
        }
    }

}