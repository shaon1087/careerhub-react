const getStoredApplication = () =>{
    const storedApplication = localStorage.getItem('job-application');
    if(storedApplication){
        return JSON.parse(storedApplication);
    }
    return [];
}

const saveJobApplication = id =>{
    const storedApplication = getStoredApplication();
    const exits = storedApplication.find(jobId =>jobId === id);
    if(!exits){
        storedApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedApplication));
    }



}

export { saveJobApplication, getStoredApplication}