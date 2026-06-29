const character = {
    name: "Swamp Beast Diplomat",
    class: "Diplomat",
    level: 1,
    health: 100,
    image: "images/snortleblat.webp",

    attacked: function () {
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            alert("The character has died.");
        }

        renderCharacter();
    },

    levelUp: function () {
        this.level++;
        renderCharacter();

    }
};

function renderCharacter() {
    document.querySelector("#name").textContent = character.name;
    document.querySelector("#class").textContent = character.class;
    document.querySelector("#level").textContent = character.level;
    document.querySelector("#health").textContent = character.health;
    document.querySelector("#image").setAttribute("src", character.image);
    document.querySelector("#image").setAttribute("alt", character.name);
}

renderCharacter();

document.querySelector("#attack").addEventListener("click", function () {
    character.attacked();
});

document.querySelector("#levelUp").addEventListener("click", function () {
    character.levelUp();
});