const typeData = {
  Normal: {
    strong: [
      { type: 'None', tip: 'Normal has no strength' }
    ],
    weak: [
      { type: 'Fighting', tip: 'Muscle overcomes average strength' }
    ],
    icon: 'icons/normal.png'
  },
  Fire: {
    strong: [
      { type: 'Grass', tip: 'Fire burns grass' },
      { type: 'Bug', tip: 'Bugs don’t like fire' },
      { type: 'Ice', tip: 'Fire melts ice' },
      { type: 'Steel', tip: 'Fire melts metal' },
    ],
    weak: [
      { type: 'Water', tip: 'Water puts out fire' },
      { type: 'Rock', tip: 'Rock smothers flames' },
      { type: 'Ground', tip: 'Earth buries fire' },
    ],
    icon: 'icons/fire.png'
  },
  Water: {
    strong: [
      { type: 'Fire', tip: 'Water puts out fire' },
      { type: 'Rock', tip: 'Water erodes rock' },
      { type: 'Ground', tip: 'Water turns ground to mud' },
    ],
    weak: [
      { type: 'Electric', tip: 'Water conducts electricity' },
      { type: 'Grass', tip: 'Plants drink the water dry' },
    ],
    icon: 'icons/water.png'
  },
  Fighting: {
    strong: [
      { type: 'Normal', tip: 'Fighting overwhelms average strength' },
      { type: 'Rock', tip: 'Punches crack rocks' },
      { type: 'Steel', tip: 'Strong punches dent metal' },
      { type: 'Ice', tip: 'Smashes through ice' },
      { type: 'Dark', tip: 'Heroes beat villains' }
    ],
    weak: [
      { type: 'Flying', tip: 'Fighters can’t reach flying foes' },
      { type: 'Psychic', tip: 'Mind over muscle' },
      { type: 'Fairy', tip: 'Magic dodges brute force' }
    ],
    icon: 'icons/fighting.png'
  },
  Flying: {
    strong: [
      { type: 'Fighting', tip: 'Birds avoid punches' },
      { type: 'Bug', tip: 'Birds eat bugs' },
      { type: 'Grass', tip: 'Birds eat plants' }
    ],
    weak: [
      { type: 'Electric', tip: 'Birds get zapped' },
      { type: 'Rock', tip: 'Birds crash into rocks' },
      { type: 'Ice', tip: 'Wings freeze in the cold' }
    ],
    icon: 'icons/flying.png'
  },
  Poison: {
    strong: [
      { type: 'Grass', tip: 'Poison kills plants' },
      { type: 'Fairy', tip: 'Poison ruins purity' }
    ],
    weak: [
      { type: 'Ground', tip: 'Earth absorbs toxins' },
      { type: 'Psychic', tip: 'Mind overcomes poison' }
    ],
    icon: 'icons/poison.png'
  },
  Ground: {
    strong: [
      { type: 'Fire', tip: 'Earth smothers fire' },
      { type: 'Electric', tip: 'Ground absorbs electricity' },
      { type: 'Poison', tip: 'Earth buries toxins' },
      { type: 'Rock', tip: 'Cracks open rocks' },
      { type: 'Steel', tip: 'Ground wears down metal' }
    ],
    weak: [
      { type: 'Water', tip: 'Water turns ground to mud' },
      { type: 'Ice', tip: 'Ground freezes and breaks' },
      { type: 'Grass', tip: 'Plants grow through soil' }
    ],
    icon: 'icons/ground.png'
  },
  Rock: {
    strong: [
      { type: 'Flying', tip: 'Birds crash into rocks' },
      { type: 'Bug', tip: 'Bugs get crushed by rocks' },
      { type: 'Fire', tip: 'Rocks snuff flames' },
      { type: 'Ice', tip: 'Rocks break ice' }
    ],
    weak: [
      { type: 'Fighting', tip: 'Punches smash rocks' },
      { type: 'Ground', tip: 'Earthquakes shatter stone' },
      { type: 'Steel', tip: 'Metal tools cut rock' },
      { type: 'Water', tip: 'Water erodes rock' },
      { type: 'Grass', tip: 'Plants grow through rock' }
    ],
    icon: 'icons/rock.png'
  },
  Bug: {
    strong: [
      { type: 'Grass', tip: 'Bugs eat leaves' },
      { type: 'Psychic', tip: 'Bugs disturb the mind' },
      { type: 'Dark', tip: 'Bugs creep in shadows' }
    ],
    weak: [
      { type: 'Fire', tip: 'Bugs burn easily' },
      { type: 'Flying', tip: 'Birds eat bugs' },
      { type: 'Rock', tip: 'Bugs get crushed' }
    ],
    icon: 'icons/bug.png'
  },
  Ghost: {
    strong: [
      { type: 'Psychic', tip: 'Spirits disturb the mind' },
      { type: 'Ghost', tip: 'Only ghosts can hit ghosts' }
    ],
    weak: [
      { type: 'Ghost', tip: 'Only ghosts can hit ghosts' },
      { type: 'Dark', tip: 'Shadows overpower spirits' }
    ],
    icon: 'icons/ghost.png'
  },
  Steel: {
    strong: [
      { type: 'Ice', tip: 'Metal melts ice' },
      { type: 'Rock', tip: 'Steel breaks rock' },
      { type: 'Fairy', tip: 'Tech overcomes magic' }
    ],
    weak: [
      { type: 'Fire', tip: 'Fire melts steel' },
      { type: 'Fighting', tip: 'Punches dent metal' },
      { type: 'Ground', tip: 'Earth corrodes steel' }
    ],
    icon: 'icons/steel.png'
  },
  Electric: {
    strong: [
      { type: 'Water', tip: 'Water conducts electricity' },
      { type: 'Flying', tip: 'Lightning hits birds' }
    ],
    weak: [
      { type: 'Ground', tip: 'Ground absorbs electricity' }
    ],
    icon: 'icons/lightning.png'
  },
  Psychic: {
    strong: [
      { type: 'Fighting', tip: 'Mind over muscle' },
      { type: 'Poison', tip: 'Psychic purifies toxins' }
    ],
    weak: [
      { type: 'Bug', tip: 'Bugs creep into minds' },
      { type: 'Ghost', tip: 'Ghosts disturb thoughts' },
      { type: 'Dark', tip: 'Darkness clouds the mind' }
    ],
    icon: 'icons/psychic.png'
  },
  Ice: {
    strong: [
      { type: 'Grass', tip: 'Frost kills plants' },
      { type: 'Ground', tip: 'Freezes and breaks earth' },
      { type: 'Flying', tip: 'Freezes wings mid-air' },
      { type: 'Dragon', tip: 'Dragons freeze too' }
    ],
    weak: [
      { type: 'Fire', tip: 'Fire melts ice' },
      { type: 'Fighting', tip: 'Punches shatter ice' },
      { type: 'Rock', tip: 'Rocks break ice' },
      { type: 'Steel', tip: 'Metal cuts through frost' }
    ],
    icon: 'icons/ice.png'
  },
  Dragon: {
    strong: [
      { type: 'Dragon', tip: 'Only dragons match dragons' }
    ],
    weak: [
      { type: 'Ice', tip: 'Even dragons freeze' },
      { type: 'Dragon', tip: 'Dragon vs. dragon' },
      { type: 'Fairy', tip: 'Fairy tales beat dragons' }
    ],
    icon: 'icons/dragon.png'
  },
  Grass: {
    strong: [
      { type: 'Water', tip: 'Plants drink water' },
      { type: 'Ground', tip: 'Roots crack soil' },
      { type: 'Rock', tip: 'Plants break through rock' }
    ],
    weak: [
      { type: 'Fire', tip: 'Fire burns plants' },
      { type: 'Ice', tip: 'Frost wilts plants' },
      { type: 'Bug', tip: 'Bugs chew leaves' },
      { type: 'Flying', tip: 'Birds eat plants' },
      { type: 'Poison', tip: 'Poison withers growth' }
    ],
    icon: 'icons/grass.png'
  },
  Dark: {
    strong: [
      { type: 'Ghost', tip: 'Darkness consumes spirits' },
      { type: 'Psychic', tip: 'Dark clouds the mind' }
    ],
    weak: [
      { type: 'Fighting', tip: 'Bravery beats darkness' },
      { type: 'Bug', tip: 'Creepy crawlies overwhelm darkness' },
      { type: 'Fairy', tip: 'Light magic defeats dark' }
    ],
    icon: 'icons/dark.png'
  },
  Fairy: {
    strong: [
      { type: 'Fighting', tip: 'Magic outwits muscle' },
      { type: 'Dragon', tip: 'Fairy tales beat dragons' },
      { type: 'Dark', tip: 'Light defeats shadow' }
    ],
    weak: [
      { type: 'Steel', tip: 'Metal resists magic' },
      { type: 'Poison', tip: 'Toxins ruin purity' }
    ],
    icon: 'icons/fairy.png'
  }
};

const allTypes = Object.keys(typeData);
let currentMode = null;
let selectedType = null;

function setMode(mode) {
  currentMode = mode;

  document.getElementById('strongBtn').classList.remove('active');
  document.getElementById('weakBtn').classList.remove('active');

  if (mode === 'strong') {
    document.getElementById('strongBtn').classList.add('active');
  } else {
    document.getElementById('weakBtn').classList.add('active');
  }

  renderResults();
}

function renderTypes() {
  const grid = document.getElementById('typeGrid');
  grid.innerHTML = '';
  allTypes.forEach(type => {
    const btn = document.createElement('button');
    btn.onclick = () => {
      selectedType = type;
      renderTypes();
      renderResults();
    };
    if (selectedType === type) btn.classList.add('selected');

    const icon = document.createElement('img');
    icon.src = typeData[type].icon;
    icon.alt = '';
    icon.setAttribute('aria-hidden', 'true');

    const label = document.createElement('span');
    label.textContent = type;

    btn.appendChild(icon);
    btn.appendChild(label);
    grid.appendChild(btn);
  });
}

function renderResults() {
  const container = document.getElementById('results');
  container.innerHTML = '';

  container.className = 'results ' + currentMode;

  if (!selectedType || !currentMode) {
    container.innerHTML = `
      <div class="info-card">
        <p><strong>Tip:</strong> Select a type and a mode to see results.</p>
      </div>
    `;
    return;
  }

  const iconImg = `<img src="${typeData[selectedType].icon}" alt="" aria-hidden="true" class="type-header-icon">`;
  const label = `${selectedType} is ${currentMode === 'strong' ? 'strong' : 'weak'} against:`;
  container.innerHTML = `<h2>${iconImg} ${label}</h2>`;

  const list = typeData[selectedType]?.[currentMode] || [];
  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'result-card';

    const resultIcon = typeData[item.type]?.icon
      ? `<img src="${typeData[item.type].icon}" alt="" aria-hidden="true" class="result-type-icon">`
      : '';

    card.innerHTML = `
      <h3>${resultIcon} ${item.type}</h3>
      <p>${item.tip}</p>
    `;

    container.appendChild(card);
  });
}

function resetType() {
  selectedType = null;
  renderTypes();
  renderResults();
}

renderTypes();

