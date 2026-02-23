

let interviewList = [];
let rejectedList = [];

let currentStatus = 'all'

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');



// count section

const allCardSection = document.getElementById('allCards')


let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interview')
let rejectedCount = document.getElementById('rejected')

// function count all card length
function countAll() {
    totalCount.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}

countAll()

let currentCount = countAll();

// Toggle Style important

function toggleStyle(id) {

    allFilterBtn.classList.add('text-black');
    interviewFilterBtn.classList.add('text-black');
    rejectedFilterBtn.classList.add('text-black');

    // if any button hav blue color then remove

    allFilterBtn.classList.remove('text-white', 'bg-blue-500');
    interviewFilterBtn.classList.remove('text-white', 'bg-blue-500');
    rejectedFilterBtn.classList.remove('text-white', 'bg-blue-500');

    // we need click button

    const selecteted = document.getElementById(id);

    selecteted.classList.remove('text-black')
    selecteted.classList.add('bg-blue-500','text-black-500')
    currentStatus = id;

    // sob card ke button e caple je jar jaygay cole jabe 
    if (id === 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        emptyMessage.classList.add('hidden');
    }
    // empty messages

    else if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }
    else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderrejected()
    }


}

// delegation


// button function working sector 

const mainContainer = document.querySelector('main');


mainContainer.addEventListener('click', function (event) {
    // console.log(event.target.classList.contains('interview-btn'))
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        // console.log(parentNode)

        const company = parentNode.querySelector('.company').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const job1 = parentNode.querySelector('.job1').innerText;
        const jobTime = parentNode.querySelector('.jobTime').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const notes = parentNode.querySelector('.notes').innerText;
        // parentNode.querySelector('.status').innerText = 'Interview'
        parentNode.querySelector('.status').innerText = 'Interview'
        
        const status = parentNode.querySelector('.status')
        status.classList.remove('bg-[#EEF4FF]', 'bg-red-500');
        status.classList.add('bg-green-400', 'text-black');

        const cardInfo = {
            company,
            position,
            job1,
            jobTime,
            salary,
            status: 'Interview',
            notes,

        }
        const companyExist = interviewList.find(item => item.company == cardInfo.company);


        if (!companyExist) {
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.company != cardInfo.company);
        countAll()

        if (currentStatus == 'rejected-filter-btn') {
            renderrejected()
        }
        // renderInterview()

        // console.log(interviewList)

        // console.log(company,salary,jobTime,job1,notes,status)
    }


    // Rejected button

    else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        // console.log(parentNode)

        const company = parentNode.querySelector('.company').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const job1 = parentNode.querySelector('.job1').innerText;
        const jobTime = parentNode.querySelector('.jobTime').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const notes = parentNode.querySelector('.notes').innerText;
        parentNode.querySelector('.status').innerText = 'Rejected'
        
        const status = parentNode.querySelector('.status')
        status.classList.remove('bg-[#EEF4FF]', 'bg-green-500');
        status.classList.add('text-black', 'bg-red-400');

        const cardInfo = {
            company,
            position,
            job1,
            jobTime,
            salary,
            status: 'Rejected',
            notes,

        }
        const companyExist = rejectedList.find(item => item.company == cardInfo.company);


        if (!companyExist) {
            rejectedList.push(cardInfo)
        }

        interviewList = interviewList.filter(item => item.company != cardInfo.company);

        if (currentStatus == 'interview-filter-btn') {
            renderInterview()
        }

        countAll()
        // console.log(interviewList)

        // console.log(company,salary,jobTime,job1,notes,status)


    }

});


// Filter card dending 'filterSection'
const filterSection = document.getElementById('filter-section');



function renderInterview() {
    filterSection.innerHTML = '';

    // empty message Hide/Show

    if (interviewList.length === 0) {
        emptyMessage.classList.remove('hidden');
        return;
    } else {
        emptyMessage.classList.add('hidden');
    }

    for (let interview of interviewList) {
        let div = document.createElement('div');
        div.className = 'bg-white flex justify-between rounded-md shadow-sm m-4'
        div.innerHTML = `
        <div class="space-y-2  p-6 m-3">
                    <h4 class="company font-semibold text-[20px]">${interview.company} </h4>
                    <p class="position text-[15px] font-semibold opacity-60 ">${interview.position} </p>

                    <div class="flex gap-6 opacity-60">
                        <p class="job1 font-semibold">${interview.job1} </p>
                        <p class="jobTime font-semibold">${interview.jobTime} </p>
                        <p class="salary font-semibold">${interview.salary} </p>
                    </div>

                    <div class="space-y-4">
                        <p
                            class="status font-semibold border w-[130px] h-10 flex items-center justify-center rounded-md bg-green-300 text-black">${interview.status}</p>
                        <p class="notes font-medium opacity-60">${interview.notes} </p>
                    </div>



                    <!-- button part -->
                    <div class="flex gap-5">
                        <button class="interview-btn text-green-500 font-medium border-green-500 border-2 rounded-md px-4 py-2">
                            Interview
                        </button>

                        <button class="rejected-btn border-red-500 border-2 rounded-md px-4 py-2">
                            Rejected
                        </button>
                    </div>
                </div>
                    <!-- delet btn -->
                    <div>
                        <button class="btn-delete px-4 py-2"><i class="fa-solid fa-trash"></i></button>
                    </div>
        
        `
        filterSection.appendChild(div)
    }

}


function renderrejected() {
    filterSection.innerHTML = '';
    // empty Message hide Show control

    if (rejectedList.length === 0) {
        emptyMessage.classList.remove('hidden');
        return;
    } else {
        emptyMessage.classList.add('hidden');
    }

    for (let interview of rejectedList) {
        let div = document.createElement('div');
        div.className = 'bg-white flex justify-between rounded-md shadow-sm m-4'
        div.innerHTML = `
        <div class="space-y-2  p-6 m-3">
                    <h4 class="company font-semibold text-[20px]">${interview.company} </h4>
                    <p class="position text-[15px] font-semibold opacity-60 ">${interview.position} </p>

                    <div class="flex gap-6 opacity-60">
                        <p class="job1 font-semibold">${interview.job1} </p>
                        <p class="jobTime font-semibold">${interview.jobTime} </p>
                        <p class="salary font-semibold">${interview.salary} </p>
                    </div>

                    <div class="space-y-4">
                        <p
                            class="status font-semibold w-[130px] h-10 flex items-center justify-center rounded-md text-black bg-red-300 border-2 border-red-500">${interview.status}</p>
                        <p class="notes font-medium opacity-60">${interview.notes} </p>
                    </div>



                    <!-- button part -->
                    <div class="flex gap-5">
                        <button class="interview-btn text-green-500 font-medium border-green-500 border-2 rounded-md px-4 py-2">
                            Interview
                        </button>

                        <button class="rejected-btn border-red-500 border-2 rounded-md px-4 py-2">
                            Rejected
                        </button>
                    </div>
                </div>
                    <!-- delet btn -->
                    <div>
                        <button class="btn-delete px-4 py-2"><i class="fa-solid fa-trash"></i></button>
                    </div>
        
        `
        filterSection.appendChild(div)
    }

}


// card delete 
// mainContainer.addEventListener('click',function (event)) {
//     if (event.target.classList.contains('btn-delete')){
//         console.log("delete-btn Cliked")
//     }

// }

mainContainer.addEventListener('click', function (event) {
    // console.log("delete-btn Clicked");
    // const deleteBtn = event.target.closest('.btn-delete');

    // const Delet =event.target.closest('.btn-delete');

    if (event.target.closest('.btn-delete')) {

        const parentNode = event.target.parentNode.parentNode.parentNode;
        // console.log("delete-btn Clicked",parentNode);

        parentNode.remove();

        countAll();

    }
});