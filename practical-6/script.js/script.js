const datafiles = {
    events : "../data/events.json",
    students :"../data/students.json",
    notices : "../data/notices.json",
    faqs : "../data/faqs.json"

};
let currentPage = "events";

async function loadData(file) {
    const response = await fetch(file);
    const data = await response.json();
    return data;
}


async function test() {
    const students = await loadData(datafiles.students);
    console.log(students);
}

test();



