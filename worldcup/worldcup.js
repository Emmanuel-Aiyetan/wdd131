const players = [
	// France (FRA)
	{ name: 'Mike Maignan', country: 'France', code: 'FRA', flag: '🇫🇷', position: 'GK', club: 'AC Milan', caps: 44, goals: 0, assists: 0, image: '', captain: false },
	{ name: 'Brice Samba', country: 'France', code: 'FRA', flag: '🇫🇷', position: 'GK', club: 'Rennes', caps: 5, goals: 0, assists: 0, image: '', captain: false },
	{ name: 'William Saliba', country: 'France', code: 'FRA', flag: '🇫🇷', position: 'DEF', club: 'Arsenal', caps: 39, goals: 2, assists: 1, image: '', captain: false },
	{ name: 'Dayot Upamecano', country: 'France', code: 'FRA', flag: '🇫🇷', position: 'DEF', club: 'Bayern Munich', caps: 47, goals: 1, assists: 1, image: '', captain: false },
	{ name: 'Jules Kounde', country: 'France', code: 'FRA', flag: '🇫🇷', position: 'DEF', club: 'Barcelona', caps: 38, goals: 1, assists: 2, image: '', captain: false },
	{ name: 'Aurelien Tchouameni', country: 'France', code: 'FRA', flag: '🇫🇷', position: 'MID', club: 'Real Madrid', caps: 41, goals: 3, assists: 2, image: '', captain: false },
	{ name: 'Ngolo Kante', country: 'France', code: 'FRA', flag: '🇫🇷', position: 'MID', club: 'Fenerbahce', caps: 61, goals: 3, assists: 4, image: '', captain: false },
	{ name: 'Kylian Mbappe', country: 'France', code: 'FRA', flag: '🇫🇷', position: 'FWD', club: 'Real Madrid', caps: 96, goals: 64, assists: 25, image: '', captain: true },
	{ name: 'Ousmane Dembele', country: 'France', code: 'FRA', flag: '🇫🇷', position: 'FWD', club: 'Paris Saint-Germain', caps: 55, goals: 20, assists: 18, image: '', captain: false },
	{ name: 'Bradley Barcola', country: 'France', code: 'FRA', flag: '🇫🇷', position: 'FWD', club: 'Paris Saint-Germain', caps: 17, goals: 4, assists: 5, image: '', captain: false },

	// Spain (ESP)
	{ name: 'Unai Simon', country: 'Spain', code: 'ESP', flag: '🇪🇸', position: 'GK', club: 'Athletic Club', caps: 52, goals: 0, assists: 0, image: '', captain: false },
	{ name: 'David Raya', country: 'Spain', code: 'ESP', flag: '🇪🇸', position: 'GK', club: 'Arsenal', caps: 12, goals: 0, assists: 0, image: '', captain: false },
	{ name: 'Pau Cubarsi', country: 'Spain', code: 'ESP', flag: '🇪🇸', position: 'DEF', club: 'Barcelona', caps: 18, goals: 0, assists: 1, image: '', captain: false },
	{ name: 'Marc Cucurella', country: 'Spain', code: 'ESP', flag: '🇪🇸', position: 'DEF', club: 'Chelsea', caps: 34, goals: 1, assists: 3, image: '', captain: false },
	{ name: 'Rodri', country: 'Spain', code: 'ESP', flag: '🇪🇸', position: 'MID', club: 'Manchester City', caps: 63, goals: 8, assists: 10, image: '', captain: true },
	{ name: 'Pedri', country: 'Spain', code: 'ESP', flag: '🇪🇸', position: 'MID', club: 'Barcelona', caps: 49, goals: 7, assists: 9, image: '', captain: false },
	{ name: 'Fabian Ruiz', country: 'Spain', code: 'ESP', flag: '🇪🇸', position: 'MID', club: 'Paris Saint-Germain', caps: 41, goals: 6, assists: 5, image: '', captain: false },
	{ name: 'Lamine Yamal', country: 'Spain', code: 'ESP', flag: '🇪🇸', position: 'FWD', club: 'Barcelona', caps: 32, goals: 12, assists: 14, image: 'images/lamine.webp', captain: false },
	{ name: 'Nico Williams', country: 'Spain', code: 'ESP', flag: '🇪🇸', position: 'FWD', club: 'Athletic Club', caps: 29, goals: 8, assists: 7, image: '', captain: false },
	{ name: 'Mikel Oyarzabal', country: 'Spain', code: 'ESP', flag: '🇪🇸', position: 'FWD', club: 'Real Sociedad', caps: 45, goals: 16, assists: 8, image: '', captain: false },

	// Argentina (ARG)
	{ name: 'Emiliano Martinez', country: 'Argentina', code: 'ARG', flag: '🇦🇷', position: 'GK', club: 'Aston Villa', caps: 61, goals: 0, assists: 0, image: '', captain: false },
	{ name: 'Cristian Romero', country: 'Argentina', code: 'ARG', flag: '🇦🇷', position: 'DEF', club: 'Tottenham Hotspur', caps: 48, goals: 3, assists: 1, image: '', captain: false },
	{ name: 'Nahuel Molina', country: 'Argentina', code: 'ARG', flag: '🇦🇷', position: 'DEF', club: 'Atletico Madrid', caps: 37, goals: 2, assists: 4, image: '', captain: false },
	{ name: 'Nicolas Otamendi', country: 'Argentina', code: 'ARG', flag: '🇦🇷', position: 'DEF', club: 'Benfica', caps: 116, goals: 6, assists: 2, image: '', captain: false },
	{ name: 'Enzo Fernandez', country: 'Argentina', code: 'ARG', flag: '🇦🇷', position: 'MID', club: 'Chelsea', caps: 45, goals: 6, assists: 8, image: '', captain: false },
	{ name: 'Rodrigo De Paul', country: 'Argentina', code: 'ARG', flag: '🇦🇷', position: 'MID', club: 'Atletico Madrid', caps: 89, goals: 8, assists: 12, image: '', captain: false },
	{ name: 'Alexis Mac Allister', country: 'Argentina', code: 'ARG', flag: '🇦🇷', position: 'MID', club: 'Liverpool', caps: 46, goals: 8, assists: 7, image: '', captain: false },
	{ name: 'Lionel Messi', country: 'Argentina', code: 'ARG', flag: '🇦🇷', position: 'FWD', club: 'Inter Miami', caps: 199, goals: 117, assists: 58, image: 'images/messi.webp', captain: true },
	{ name: 'Julian Alvarez', country: 'Argentina', code: 'ARG', flag: '🇦🇷', position: 'FWD', club: 'Atletico Madrid', caps: 51, goals: 14, assists: 11, image: '', captain: false },
	{ name: 'Lautaro Martinez', country: 'Argentina', code: 'ARG', flag: '🇦🇷', position: 'FWD', club: 'Inter Milan', caps: 75, goals: 33, assists: 14, image: '', captain: false },

	// England (ENG)
	{ name: 'Jordan Pickford', country: 'England', code: 'ENG', flag: '🏴', position: 'GK', club: 'Everton', caps: 76, goals: 0, assists: 0, image: '', captain: false },
	{ name: 'Dean Henderson', country: 'England', code: 'ENG', flag: '🏴', position: 'GK', club: 'Crystal Palace', caps: 4, goals: 0, assists: 0, image: '', captain: false },
	{ name: 'John Stones', country: 'England', code: 'ENG', flag: '🏴', position: 'DEF', club: 'Manchester City', caps: 82, goals: 3, assists: 3, image: '', captain: false },
	{ name: 'Marc Guehi', country: 'England', code: 'ENG', flag: '🏴', position: 'DEF', club: 'Manchester City', caps: 20, goals: 1, assists: 1, image: '', captain: false },
	{ name: 'Declan Rice', country: 'England', code: 'ENG', flag: '🏴', position: 'MID', club: 'Arsenal', caps: 69, goals: 12, assists: 9, image: '', captain: false },
	{ name: 'Jude Bellingham', country: 'England', code: 'ENG', flag: '🏴', position: 'MID', club: 'Real Madrid', caps: 45, goals: 12, assists: 10, image: '', captain: false },
	{ name: 'Eberechi Eze', country: 'England', code: 'ENG', flag: '🏴', position: 'MID', club: 'Arsenal', caps: 12, goals: 3, assists: 4, image: '', captain: false },
	{ name: 'Harry Kane', country: 'England', code: 'ENG', flag: '🏴', position: 'FWD', club: 'Bayern Munich', caps: 108, goals: 78, assists: 25, image: 'images/kane.jpg', captain: true },
	{ name: 'Bukayo Saka', country: 'England', code: 'ENG', flag: '🏴', position: 'FWD', club: 'Arsenal', caps: 45, goals: 16, assists: 15, image: '', captain: false },
	{ name: 'Ollie Watkins', country: 'England', code: 'ENG', flag: '🏴', position: 'FWD', club: 'Aston Villa', caps: 24, goals: 8, assists: 6, image: '', captain: false },

	// Portugal (POR)
	{ name: 'Diogo Costa', country: 'Portugal', code: 'POR', flag: '🇵🇹', position: 'GK', club: 'FC Porto', caps: 34, goals: 0, assists: 0, image: '', captain: false },
	{ name: 'Ruben Dias', country: 'Portugal', code: 'POR', flag: '🇵🇹', position: 'DEF', club: 'Manchester City', caps: 58, goals: 2, assists: 1, image: '', captain: false },
	{ name: 'Nuno Mendes', country: 'Portugal', code: 'POR', flag: '🇵🇹', position: 'DEF', club: 'Paris Saint-Germain', caps: 33, goals: 1, assists: 5, image: '', captain: false },
	{ name: 'Bernardo Silva', country: 'Portugal', code: 'POR', flag: '🇵🇹', position: 'MID', club: 'Manchester City', caps: 96, goals: 15, assists: 16, image: '', captain: false },
	{ name: 'Bruno Fernandes', country: 'Portugal', code: 'POR', flag: '🇵🇹', position: 'MID', club: 'Manchester United', caps: 92, goals: 34, assists: 32, image: '', captain: false },
	{ name: 'Joao Neves', country: 'Portugal', code: 'POR', flag: '🇵🇹', position: 'MID', club: 'Paris Saint-Germain', caps: 24, goals: 3, assists: 4, image: '', captain: false },
	{ name: 'Vitinha', country: 'Portugal', code: 'POR', flag: '🇵🇹', position: 'MID', club: 'Paris Saint-Germain', caps: 31, goals: 4, assists: 6, image: '', captain: false },
	{ name: 'Cristiano Ronaldo', country: 'Portugal', code: 'POR', flag: '🇵🇹', position: 'FWD', club: 'Al Nassr', caps: 226, goals: 143, assists: 46, image: 'images/ronaldo.webp', captain: true },
	{ name: 'Rafael Leao', country: 'Portugal', code: 'POR', flag: '🇵🇹', position: 'FWD', club: 'AC Milan', caps: 37, goals: 8, assists: 9, image: '', captain: false },
	{ name: 'Goncalo Ramos', country: 'Portugal', code: 'POR', flag: '🇵🇹', position: 'FWD', club: 'Paris Saint-Germain', caps: 27, goals: 12, assists: 5, image: '', captain: false },

	// Brazil (BRA)
	{ name: 'Alisson', country: 'Brazil', code: 'BRA', flag: '🇧🇷', position: 'GK', club: 'Liverpool', caps: 68, goals: 0, assists: 1, image: '', captain: false },
	{ name: 'Marquinhos', country: 'Brazil', code: 'BRA', flag: '🇧🇷', position: 'DEF', club: 'Paris Saint-Germain', caps: 96, goals: 6, assists: 2, image: '', captain: true },
	{ name: 'Gabriel Magalhaes', country: 'Brazil', code: 'BRA', flag: '🇧🇷', position: 'DEF', club: 'Arsenal', caps: 20, goals: 3, assists: 1, image: '', captain: false },
	{ name: 'Bruno Guimaraes', country: 'Brazil', code: 'BRA', flag: '🇧🇷', position: 'MID', club: 'Newcastle United', caps: 28, goals: 3, assists: 5, image: '', captain: false },
	{ name: 'Vinicius Junior', country: 'Brazil', code: 'BRA', flag: '🇧🇷', position: 'FWD', club: 'Real Madrid', caps: 40, goals: 12, assists: 11, image: '', captain: false },
	{ name: 'Neymar', country: 'Brazil', code: 'BRA', flag: '🇧🇷', position: 'FWD', club: 'Santos', caps: 128, goals: 79, assists: 56, image: 'images/neymar.webp', captain: false },
	{ name: 'Raphinha', country: 'Brazil', code: 'BRA', flag: '🇧🇷', position: 'FWD', club: 'Barcelona', caps: 34, goals: 12, assists: 13, image: '', captain: false },
	{ name: 'Gabriel Martinelli', country: 'Brazil', code: 'BRA', flag: '🇧🇷', position: 'FWD', club: 'Arsenal', caps: 19, goals: 4, assists: 4, image: '', captain: false },
	{ name: 'Igor Thiago', country: 'Brazil', code: 'BRA', flag: '🇧🇷', position: 'FWD', club: 'Brentford', caps: 6, goals: 2, assists: 1, image: '', captain: false },
	{ name: 'Endrick', country: 'Brazil', code: 'BRA', flag: '🇧🇷', position: 'FWD', club: 'Real Madrid', caps: 11, goals: 3, assists: 2, image: '', captain: false },

	// Netherlands (NED)
	{ name: 'Bart Verbruggen', country: 'Netherlands', code: 'NED', flag: '🇳🇱', position: 'GK', club: 'Brighton', caps: 20, goals: 0, assists: 0, image: '', captain: false },
	{ name: 'Virgil van Dijk', country: 'Netherlands', code: 'NED', flag: '🇳🇱', position: 'DEF', club: 'Liverpool', caps: 89, goals: 8, assists: 3, image: '', captain: true },
	{ name: 'Nathan Ake', country: 'Netherlands', code: 'NED', flag: '🇳🇱', position: 'DEF', club: 'Manchester City', caps: 55, goals: 3, assists: 2, image: '', captain: false },
	{ name: 'Denzel Dumfries', country: 'Netherlands', code: 'NED', flag: '🇳🇱', position: 'DEF', club: 'Inter Milan', caps: 65, goals: 10, assists: 12, image: '', captain: false },
	{ name: 'Frenkie de Jong', country: 'Netherlands', code: 'NED', flag: '🇳🇱', position: 'MID', club: 'Barcelona', caps: 68, goals: 5, assists: 8, image: '', captain: false },
	{ name: 'Tijjani Reijnders', country: 'Netherlands', code: 'NED', flag: '🇳🇱', position: 'MID', club: 'Manchester City', caps: 26, goals: 6, assists: 5, image: '', captain: false },
	{ name: 'Xavi Simons', country: 'Netherlands', code: 'NED', flag: '🇳🇱', position: 'MID', club: 'Leipzig', caps: 30, goals: 8, assists: 9, image: '', captain: false },
	{ name: 'Cody Gakpo', country: 'Netherlands', code: 'NED', flag: '🇳🇱', position: 'FWD', club: 'Liverpool', caps: 41, goals: 15, assists: 10, image: '', captain: false },
	{ name: 'Memphis Depay', country: 'Netherlands', code: 'NED', flag: '🇳🇱', position: 'FWD', club: 'Corinthians', caps: 96, goals: 51, assists: 27, image: '', captain: false },
	{ name: 'Donyell Malen', country: 'Netherlands', code: 'NED', flag: '🇳🇱', position: 'FWD', club: 'Roma', caps: 33, goals: 9, assists: 6, image: '', captain: false },

	// Morocco (MAR)
	{ name: 'Yassine Bounou', country: 'Morocco', code: 'MAR', flag: '🇲🇦', position: 'GK', club: 'Al Hilal', caps: 62, goals: 0, assists: 0, image: '', captain: false },
	{ name: 'Achraf Hakimi', country: 'Morocco', code: 'MAR', flag: '🇲🇦', position: 'DEF', club: 'Paris Saint-Germain', caps: 77, goals: 9, assists: 14, image: '', captain: true },
	{ name: 'Noussair Mazraoui', country: 'Morocco', code: 'MAR', flag: '🇲🇦', position: 'DEF', club: 'Manchester United', caps: 41, goals: 1, assists: 3, image: '', captain: false },
	{ name: 'Nayef Aguerd', country: 'Morocco', code: 'MAR', flag: '🇲🇦', position: 'DEF', club: 'Marseille', caps: 39, goals: 2, assists: 1, image: '', captain: false },
	{ name: 'Sofyan Amrabat', country: 'Morocco', code: 'MAR', flag: '🇲🇦', position: 'MID', club: 'Real Betis', caps: 61, goals: 1, assists: 2, image: '', captain: false },
	{ name: 'Azzedine Ounahi', country: 'Morocco', code: 'MAR', flag: '🇲🇦', position: 'MID', club: 'Girona', caps: 34, goals: 2, assists: 3, image: '', captain: false },
	{ name: 'Bilal El Khannouss', country: 'Morocco', code: 'MAR', flag: '🇲🇦', position: 'MID', club: 'Stuttgart', caps: 18, goals: 3, assists: 4, image: '', captain: false },
	{ name: 'Brahim Diaz', country: 'Morocco', code: 'MAR', flag: '🇲🇦', position: 'FWD', club: 'Real Madrid', caps: 15, goals: 4, assists: 3, image: '', captain: false },
	{ name: 'Ayoub El Kaabi', country: 'Morocco', code: 'MAR', flag: '🇲🇦', position: 'FWD', club: 'Olympiacos', caps: 32, goals: 15, assists: 4, image: '', captain: false },
	{ name: 'Soufiane Rahimi', country: 'Morocco', code: 'MAR', flag: '🇲🇦', position: 'FWD', club: 'Al Ain', caps: 24, goals: 10, assists: 5, image: '', captain: false },

	// Belgium (BEL)
	{ name: 'Thibaut Courtois', country: 'Belgium', code: 'BEL', flag: '🇧🇪', position: 'GK', club: 'Real Madrid', caps: 106, goals: 0, assists: 0, image: '', captain: false },
	{ name: 'Zeno Debast', country: 'Belgium', code: 'BEL', flag: '🇧🇪', position: 'DEF', club: 'Sporting CP', caps: 15, goals: 0, assists: 1, image: '', captain: false },
	{ name: 'Youri Tielemans', country: 'Belgium', code: 'BEL', flag: '🇧🇪', position: 'MID', club: 'Aston Villa', caps: 78, goals: 8, assists: 9, image: '', captain: true },
	{ name: 'Kevin De Bruyne', country: 'Belgium', code: 'BEL', flag: '🇧🇪', position: 'MID', club: 'Napoli', caps: 111, goals: 37, assists: 68, image: '', captain: false },
	{ name: 'Amadou Onana', country: 'Belgium', code: 'BEL', flag: '🇧🇪', position: 'MID', club: 'Aston Villa', caps: 27, goals: 2, assists: 3, image: '', captain: false },
	{ name: 'Axel Witsel', country: 'Belgium', code: 'BEL', flag: '🇧🇪', position: 'MID', club: 'Girona', caps: 138, goals: 6, assists: 7, image: '', captain: false },
	{ name: 'Romelu Lukaku', country: 'Belgium', code: 'BEL', flag: '🇧🇪', position: 'FWD', club: 'Napoli', caps: 116, goals: 89, assists: 30, image: '', captain: false },
	{ name: 'Jeremy Doku', country: 'Belgium', code: 'BEL', flag: '🇧🇪', position: 'FWD', club: 'Manchester City', caps: 34, goals: 5, assists: 8, image: '', captain: false },
	{ name: 'Leandro Trossard', country: 'Belgium', code: 'BEL', flag: '🇧🇪', position: 'FWD', club: 'Arsenal', caps: 41, goals: 12, assists: 9, image: '', captain: false },
	{ name: 'Charles De Ketelaere', country: 'Belgium', code: 'BEL', flag: '🇧🇪', position: 'FWD', club: 'Atalanta', caps: 22, goals: 7, assists: 6, image: '', captain: false },

	// Germany (GER)
	{ name: 'Manuel Neuer', country: 'Germany', code: 'GER', flag: '🇩🇪', position: 'GK', club: 'Bayern Munich', caps: 124, goals: 0, assists: 1, image: '', captain: true },
	{ name: 'Nico Schlotterbeck', country: 'Germany', code: 'GER', flag: '🇩🇪', position: 'DEF', club: 'Borussia Dortmund', caps: 23, goals: 1, assists: 2, image: '', captain: false },
	{ name: 'Joshua Kimmich', country: 'Germany', code: 'GER', flag: '🇩🇪', position: 'MID', club: 'Bayern Munich', caps: 100, goals: 12, assists: 33, image: '', captain: false },
	{ name: 'Florian Wirtz', country: 'Germany', code: 'GER', flag: '🇩🇪', position: 'MID', club: 'Liverpool', caps: 30, goals: 9, assists: 14, image: '', captain: false },
	{ name: 'Jamal Musiala', country: 'Germany', code: 'GER', flag: '🇩🇪', position: 'MID', club: 'Bayern Munich', caps: 35, goals: 14, assists: 11, image: '', captain: false },
	{ name: 'Kai Havertz', country: 'Germany', code: 'GER', flag: '🇩🇪', position: 'FWD', club: 'Arsenal', caps: 51, goals: 18, assists: 12, image: '', captain: false },
	{ name: 'Leroy Sane', country: 'Germany', code: 'GER', flag: '🇩🇪', position: 'FWD', club: 'Galatasaray', caps: 63, goals: 20, assists: 21, image: '', captain: false },
	{ name: 'Nick Woltemade', country: 'Germany', code: 'GER', flag: '🇩🇪', position: 'FWD', club: 'Newcastle United', caps: 8, goals: 4, assists: 2, image: '', captain: false },
	{ name: 'Deniz Undav', country: 'Germany', code: 'GER', flag: '🇩🇪', position: 'FWD', club: 'Stuttgart', caps: 14, goals: 6, assists: 3, image: '', captain: false },
	{ name: 'Assan Ouedraogo', country: 'Germany', code: 'GER', flag: '🇩🇪', position: 'FWD', club: 'Leipzig', caps: 5, goals: 1, assists: 1, image: '', captain: false }
];

const cardContainer = document.querySelector('#card-container');
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('#search-button');
const filterButtons = document.querySelectorAll('.filter-btn');

let activePosition = 'All';

function positionClass(position) {
	if (position === 'GK') return 'pos-gk';
	if (position === 'DEF') return 'pos-def';
	if (position === 'MID') return 'pos-mid';
	return 'pos-fwd';
}

function captainBadgeTemplate(player) {
	if (player.captain) {
		return `<span class="captain-badge">Captain</span>`;
	}
	return '';
}

function avatarUrl(player) {
	const initials = encodeURIComponent(player.name);
	return `https://ui-avatars.com/api/?name=${initials}&background=1a2743&color=d4a72c&size=256&bold=true`;
}

function photoTemplate(player) {
	const fallback = avatarUrl(player);
	const src = player.image.trim() !== '' ? player.image : fallback;
	return `<img class="player-photo" src="${src}" alt="${player.name}" width="90" height="90" loading="lazy" onerror="this.onerror=null; this.src='${fallback}';">`;
}

function cardTemplate(player) {
	return `
	<article class="player-card">
		<div class="card-front">
			${photoTemplate(player)}
			<span class="position-tag ${positionClass(player.position)}">${player.position}</span>
			<h2>${player.name}</h2>
			<p class="country">${player.flag} ${player.country} <span class="code">${player.code}</span></p>
			${captainBadgeTemplate(player)}
		</div>
		<div class="card-back">
			<h2>${player.name}</h2>
			<ul>
				<li><span>Club</span> ${player.club}</li>
				<li><span>Caps</span> ${player.caps}</li>
				<li><span>Goals</span> ${player.goals}</li>
				<li><span>Assists</span> ${player.assists}</li>
				<li><span>Position</span> ${player.position}</li>
			</ul>
		</div>
	</article>
	`;
}

function renderPlayers(playerList) {
	if (playerList.length === 0) {
		cardContainer.innerHTML = '<p class="no-results">No players found. Try a different name, country, or position.</p>';
		return;
	}

	// Build the full HTML string first, then write it to the page ONE time.
	// Using += in a loop forces the browser to re-render everything each pass, which is slow.
	const allCardsHtml = playerList.map(player => cardTemplate(player)).join('');
	cardContainer.innerHTML = allCardsHtml;

	const cards = document.querySelectorAll('.player-card');
	cards.forEach(card => {
		card.addEventListener('click', function () {
			card.classList.toggle('flipped');
		});
	});
}

function comparePlayers(a, b) {
	if (a.name.toLowerCase() < b.name.toLowerCase()) {
		return -1;
	} else if (a.name.toLowerCase() > b.name.toLowerCase()) {
		return 1;
	}
	return 0;
}

function filterByPosition(playerList) {
	if (activePosition === 'All') {
		return playerList;
	}
	return playerList.filter(player => player.position === activePosition);
}

function shuffleArray(array) {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

function searchPlayers() {
	const query = searchInput.value.toLowerCase().trim();

	let filteredPlayers = players.filter(function (player) {
		return (
			player.name.toLowerCase().includes(query) ||
			player.country.toLowerCase().includes(query) ||
			player.code.toLowerCase().includes(query) ||
			player.position.toLowerCase().includes(query) ||
			player.club.toLowerCase().includes(query)
		);
	});

	filteredPlayers = filterByPosition(filteredPlayers);
	filteredPlayers.sort(comparePlayers);

	renderPlayers(filteredPlayers);
}

searchButton.addEventListener('click', searchPlayers);

searchInput.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		searchPlayers();
	}
});

searchInput.addEventListener('input', searchPlayers);

filterButtons.forEach(button => {
	button.addEventListener('click', function () {
		filterButtons.forEach(btn => btn.classList.remove('active'));
		button.classList.add('active');
		activePosition = button.dataset.position;
		searchPlayers();
	});
});

function init() {
	const randomSix = shuffleArray(players).slice(0, 6);
	renderPlayers(randomSix);
}

init();