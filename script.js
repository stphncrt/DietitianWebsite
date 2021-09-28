const programs = [
	{
		id: 1,
		title: "Sports Diet",
		img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTg4MTgwMA&ixlib=rb-1.2.1&q=80&w=400",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis nam, est assumenda distinctio error iste fugiat reiciendis, repudiandae aliquam sint at. Placeat optio mollitia, maxime incidunt rerum quod commodi tempora repellat voluptates adipisci, vero dolorem non voluptate nobis earum nemo nesciunt quo ad consequatur odit libero sequi aperiam. Porro ipsum eos maiores quae doloribus?",
		isShown: false,
	},
	{
		id: 2,
		title: "Celiac Diet",
		img: "https://images.unsplash.com/photo-1613563952058-93bc5bff5591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTgzNDI4OQ&ixlib=rb-1.2.1&q=80&w=400",
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur velit itaque ipsum id vel soluta ut unde, quo praesentium at odit eius corporis assumenda nesciunt nobis quasi iusto aperiam architecto, voluptatum quod aliquid. Id explicabo repellat maiores cumque, adipisci vitae, nisi quae aut quasi, ex eos. Soluta officiis porro consequuntur nobis dicta sit nostrum ratione suscipit. Alias libero aspernatur ab delectus, consectetur numquam pariatur nam maxime in explicabo possimus, officiis, provident amet vero accusamus sit. Distinctio maiores dicta odit? Aperiam earum soluta fuga expedita aliquid explicabo doloremque nesciunt. Explicabo eaque excepturi in vero quis minus sint ad eius earum! Libero.",
		isShown: false,
	},
	{
		id: 3,
		title: "Intermittent Fasting",
		img: "https://images.unsplash.com/photo-1605210055810-bdd1c4d1f343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTkxNDQxMw&ixlib=rb-1.2.1&q=80&w=400",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusamus itaque quas tenetur officiis, eius aliquid quaerat illo velit, officia mollitia similique, recusandae ex numquam quasi totam laborum nihil dolore. Nulla quas quaerat ratione vitae sit tenetur explicabo assumenda inventore architecto. Expedita voluptatem dolor voluptate quaerat, ipsa quos aspernatur autem, eveniet, repellat tenetur illo voluptates consectetur. Temporibus, accusantium omnis, laudantium ipsam odio repellat blanditiis illum ab aspernatur iusto voluptatum inventore reprehenderit molestiae eaque nostrum. Architecto veniam laudantium ipsum error totam nemo iusto facilis vel non? Quam neque ipsa amet ducimus inventore similique nihil odio deserunt quaerat qui illum aliquam, distinctio eum adipisci eligendi repudiandae laborum, sequi odit obcaecati magnam libero! Ducimus, quibusdam! Tempora quasi, animi neque commodi debitis facere consequuntur.",
		isShown: false,
	},

	{
		id: 4,
		title: "Pregnancy Diet",
		img: "https://images.unsplash.com/photo-1582045559104-e176d91c6dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTgzNDU0Nw&ixlib=rb-1.2.1&q=80&w=400",
		desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure tenetur, quae sit aliquid consequatur dicta blanditiis doloribus iusto commodi pariatur praesentium amet voluptatem incidunt necessitatibus odit quis in quibusdam. Vel minima veritatis harum eaque enim, ducimus numquam deserunt cum dolores eligendi laudantium dignissimos est doloribus atque, pariatur impedit soluta cupiditate delectus voluptates nobis aspernatur magni, nihil eum. Cumque delectus dolor harum quia, molestias neque perspiciatis impedit quae ad quasi repudiandae mollitia minima asperiores sint iusto ipsum facere qui accusantium dolores.",
		isShown: false,
	},
	{
		id: 5,
		title: "Diabetics Diet",
		img: "https://images.unsplash.com/photo-1606791429351-0ea30ec4e0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTgzNDgzNg&ixlib=rb-1.2.1&q=80&w=400",
		desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nihil, optio vero nemo explicabo ex alias nisi sequi quis amet nam doloribus voluptatem labore ullam expedita accusamus, magni ipsa reiciendis esse. Soluta blanditiis neque dolore quibusdam recusandae cum fugiat assumenda accusantium rerum voluptatem officia porro excepturi esse quod laboriosam omnis autem, quos culpa ex alias velit praesentium pariatur odio? Voluptates sit obcaecati, magnam suscipit unde debitis temporibus optio praesentium hic nihil eaque doloremque excepturi voluptate tenetur in est minus? Tempora quis ut minus eligendi mollitia officiis accusantium aspernatur placeat ipsa!",
		isShown: false,
	},

	{
		id: 6,
		title: "Weight Gaining Diet",
		img: "https://images.unsplash.com/photo-1508424897381-4fd8755e4b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTkxNDUyOQ&ixlib=rb-1.2.1&q=80&w=400",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque ipsum, sit eum atque voluptatem maiores! Repudiandae, sapiente? Sunt doloribus cumque omnis cum ab, sint, ipsum minus a dolores expedita quis pariatur debitis velit beatae obcaecati architecto aperiam eius, error aliquam minima facilis odio tempore? Enim animi numquam fugit excepturi omnis quaerat voluptate in! Excepturi esse necessitatibus sint quae ratione voluptatum quaerat incidunt placeat minus et doloremque, assumenda nemo ad sunt qui officia, consequuntur cumque tenetur? Voluptas, doloribus.",
		isShown: false,
	},
	{
		id: 7,
		title: "Vegeterian Diet",
		img: "https://images.unsplash.com/photo-1543362906-acfc16c67564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTkxNDE3Mw&ixlib=rb-1.2.1&q=80&w=400",
		desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat omnis veritatis non molestiae fuga soluta commodi corporis aliquid velit in voluptatum quia officiis dicta maxime earum, excepturi ducimus magni, mollitia possimus unde, dolor provident optio accusamus ut. Ad quisquam et dolores soluta voluptatem eligendi hic ab dolor ut. Sapiente eum minus impedit pariatur! Repudiandae, expedita sequi. Nobis nostrum veritatis adipisci voluptate consectetur ea, perspiciatis, quo ducimus excepturi sint sed enim recusandae voluptates fugiat nihil pariatur est et quam officia error culpa impedit. Numquam tempore pariatur exercitationem esse impedit!",
		isShown: false,
	},
	{
		id: 8,
		title: "Weight Losing Diet",
		img: "https://images.unsplash.com/photo-1591089398845-0dbbbdba1f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTg4MTk5MA&ixlib=rb-1.2.1&q=80&w=400",
		desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit, autem nemo qui accusamus delectus a nulla odio, reprehenderit distinctio officia? Provident et ducimus amet? Perferendis quis incidunt harum optio quod fugit debitis, voluptate consequatur officiis, dolorum ea rem, doloremque dignissimos. Aspernatur quasi quam rerum officiis quaerat minima tenetur laborum, facere facilis dicta sapiente itaque molestias perspiciatis quo ea laboriosam blanditiis repellendus fuga, ipsa neque veniam nisi totam quidem. Dolorem nobis nisi voluptas dolor repudiandae earum non illo autem impedit minima molestias doloribus rerum dicta saepe eum enim, repellendus fugiat quis eos soluta quidem odit accusamus numquam? Dolorum ab asperiores illum odit, inventore sit tempora deleniti unde officia debitis sequi sunt ratione natus nulla? Autem, eius? Quisquam dolores facilis, animi deleniti quasi iusto, illum optio ab odit temporibus consectetur in.",
		isShown: false,
	},
];
// ===========Diet Programs Card Display Section===============
window.addEventListener("DOMContentLoaded", function () {
	displayProgram();
});

const programElement = document.getElementById("dietPrograms");

function displayProgram() {
	let programContent = "";

	programs.forEach((program) => {
		programContent += `<div  id=${program.id} class='progbox'  >
        <p id='programInfo'>${program.title}</p>
        <img id='programImg'src= ${program.img} onClick=modal(event) alt='Diet Program' />
      </div>`;
	});

	programElement.innerHTML = programContent;
}

//=============Modal Section==========================

const modalContainerElement = document.getElementById("modalContainer");
const modalElement = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalDescription = document.getElementById("modalDesc");
const modalTitle = document.getElementById("modalTitle");
function modal(event) {
	programs.forEach((prog) => {
		if (prog.id == event.path[1].id) {
			console.log(prog.isShown);
			prog.isShown = !prog.isShown;
			console.log(prog.isShown);
			modalDescription.innerHTML = prog.desc;
			modalTitle.innerHTML = prog.title;
			modalImg.src = prog.img;

			prog.isShown ? openModal() : null; /* ternary operator control*/
		}
	});
}
function openModal() {
	modalContainerElement.style.display = "flex";
	modalElement.style.display = "flex";
}
function closeModal() {
	modalElement.style.display = "none";
	modalContainerElement.style.display = "none";
	programElement.style.display = "flex";
}

// ================== Body Mass Calculation Section=================

const BMIElement = document.getElementById("BMI");
const calcElement = document.getElementById("calc_btn");
calcElement.addEventListener("click", function () {
	calculation();
});
const weigthElement = document.getElementById("weigthInput"); // get the value of user's weigth
const lengthElement = document.getElementById("lengthInput"); // get the value of user's tall
const diet_btnElement = document.getElementById("diet_btn");

// to calculate the BMI then display the result and result related notification
function calculation() {
	const weigth = weigthElement.value;
	const length = lengthElement.value;
	if (weigth == "" || length == "") {
		BMIElement.innerHTML = "Please type something";
	} else {
		const BMI = Math.round(weigth / (length / 100) ** 2, 2);
		if (BMI < 25) {
			BMIElement.innerHTML = `Your Body Mass Index is: ${BMI}, <br> Don't worry its ok..<br><span style='font-size:100px;'>&#128077;</span>`;
		} else if (BMI < 35) {
			BMIElement.innerHTML = `Your Body Mass Index is: ${BMI}, <br> You need to lose weight..<br><span style='font-size:100px;'>&#128542;</span>`;
		} else if (BMI < 40) {
			BMIElement.innerHTML = `Your Body Mass Index is: ${BMI}, <br> You are a bit fatty..<br><span style='font-size:100px;'>&#128078;</span>`;
		} else {
			BMIElement.innerHTML = `Your Body Mass Index is: ${BMI}, <br> I'm sorry but You are obez..<br><span style='font-size:100px;'>&#10060;</span>`;
		}
	}
	diet_btnElement.style.display = "block"; // button shows up
}

// Slider script=============================================

var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	slides[slideIndex - 1].style.display = "block";

	setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//Slider Ends==================================

//Table Visibility==================

const tableElement = document.getElementById("tableContainer");
tableElement.style.display = "none"; //table invisible
// to make the table visible
function buttonClickHandler() {
	tableElement.style.display = "flex";
}
//TO make the table invisible again
window.onclick = function (e) {
	if (e.target != diet_btnElement) {
		tableElement.style.display = "none";
	}
};
