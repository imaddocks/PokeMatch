const typeData = {
  Normal: {
    strong: [
      { type: 'None', tip: 'Normal has no strength' }
    ],
    weak: [
      { type: 'Fighting', tip: 'Muscle overpowers average strength' }
    ],
    icon: 'icons/normal.png'
  },
  Fire: {
    strong: [
      { type: 'Grass', tip: 'Fire burns grass' },
      { type: 'Bug', tip: 'Bugs burn easily' },
      { type: 'Ice', tip: 'Fire melts ice' },
      { type: 'Steel', tip: 'Fire melts steel' },
    ],
    weak: [
      { type: 'Water', tip: 'Water puts out fire' },
      { type: 'Rock', tip: 'Rock smothers flames' },
      { type: 'Ground', tip: 'Earth smothers fire' },
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
      { type: 'Grass', tip: 'Grass drinks water' },
    ],
    icon: 'icons/water.png'
  },
  Fighting: {
    strong: [
      { type: 'Normal', tip: 'Muscle overcomes average strength' },
      { type: 'Rock', tip: 'Punches crack rocks' },
      { type: 'Steel', tip: 'Punches dent metal' },
      { type: 'Ice', tip: 'Punches shatter ice' },
      { type: 'Dark', tip: 'Heroes beat villains' }
    ],
    weak: [
      { type: 'Flying', tip: 'Fighters can’t reach flying foes' },
      { type: 'Psychic', tip: 'Magic outwits muscle' },
      { type: 'Fairy', tip: 'Fairies outwit fighters' }
    ],
    icon: 'icons/fighting.png'
  },
  Flying: {
    strong: [
      { type: 'Fighting', tip: 'Fighters can’t reach flying foes' },
      { type: 'Bug', tip: 'Birds eat bugs' },
      { type: 'Grass', tip: 'Birds eat plants' }
    ],
    weak: [
      { type: 'Electric', tip: 'Lightning hits birds' },
      { type: 'Rock', tip: 'Birds crash into rocks' },
      { type: 'Ice', tip: 'Birds migrate in the winter' }
    ],
    icon: 'icons/flying.png'
  },
  Poison: {
    strong: [
      { type: 'Grass', tip: 'Weedkiller poisons plants' },
      { type: 'Fairy', tip: 'Poison breaks enchantments' }
    ],
    weak: [
      { type: 'Ground', tip: 'Earth absorbs toxins' },
      { type: 'Psychic', tip: 'A trained mind resists poison' }
    ],
    icon: 'icons/poison.png'
  },
  Ground: {
    strong: [
      { type: 'Fire', tip: 'Earth smothers fire' },
      { type: 'Electric', tip: 'Ground absorbs electricity' },
      { type: 'Poison', tip: 'Earth absorbs toxins' },
      { type: 'Rock', tip: 'Earthquakes shatter rocks' },
      { type: 'Steel', tip: 'Earth corrodes steel' }
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
      { type: 'Fire', tip: 'Rock smothers flames' },
      { type: 'Ice', tip: 'Rocks break ice' }
    ],
    weak: [
      { type: 'Fighting', tip: 'Punches crack rocks' },
      { type: 'Ground', tip: 'Earthquakes shatter rock' },
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
      { type: 'Rock', tip: 'Bugs get crushed by rocks' }
    ],
    icon: 'icons/bug.png'
  },
  Ghost: {
    strong: [
      { type: 'Psychic', tip: 'Ghosts disturb the mind' },
      { type: 'Ghost', tip: 'Spirits clash on their own plane' }
    ],
    weak: [
      { type: 'Ghost', tip: 'Spirits clash on their own plane' },
      { type: 'Dark', tip: 'Darkness consumes spirits' }
    ],
    icon: 'icons/ghost.png'
  },
  Steel: {
    strong: [
      { type: 'Ice', tip: 'Pickaxes break ice' },
      { type: 'Rock', tip: 'Metal tools cut rock' },
      { type: 'Fairy', tip: 'Iron wards off fairy magic' }
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
      { type: 'Fighting', tip: 'A trained mind resists poison' },
      { type: 'Poison', tip: 'Psychic purifies toxins' }
    ],
    weak: [
      { type: 'Bug', tip: 'Bugs disturb the mind' },
      { type: 'Ghost', tip: 'Ghosts disturb the mind' },
      { type: 'Dark', tip: 'Darkness clouds the mind' }
    ],
    icon: 'icons/psychic.png'
  },
  Ice: {
    strong: [
      { type: 'Grass', tip: 'Frost kills plants' },
      { type: 'Ground', tip: 'Ground freezes and breaks' },
      { type: 'Flying', tip: 'Birds migrate in the winter' },
      { type: 'Dragon', tip: 'Dragons are coldblooded' }
    ],
    weak: [
      { type: 'Fire', tip: 'Fire melts ice' },
      { type: 'Fighting', tip: 'Punches shatter ice' },
      { type: 'Rock', tip: 'Rocks break ice' },
      { type: 'Steel', tip: 'Pickaxes break ice' }
    ],
    icon: 'icons/ice.png'
  },
  Dragon: {
    strong: [
      { type: 'Dragon', tip: 'A dragon fears none but its own kind' }
    ],
    weak: [
      { type: 'Ice', tip: 'Dragons are coldblooded' },
      { type: 'Dragon', tip: 'A dragon fears none but its own kind' },
      { type: 'Fairy', tip: 'Fairy tales beat dragons' }
    ],
    icon: 'icons/dragon.png'
  },
  Grass: {
    strong: [
      { type: 'Water', tip: 'Plants drink water' },
      { type: 'Ground', tip: 'Plants grow through soil' },
      { type: 'Rock', tip: 'Plants grow through rock' }
    ],
    weak: [
      { type: 'Fire', tip: 'Fire burns grass' },
      { type: 'Ice', tip: 'Frost kills plants' },
      { type: 'Bug', tip: 'Bugs eat leaves' },
      { type: 'Flying', tip: 'Birds eat plants' },
      { type: 'Poison', tip: 'Weedkiller poisons plants' }
    ],
    icon: 'icons/grass.png'
  },
  Dark: {
    strong: [
      { type: 'Ghost', tip: 'Darkness consumes spirits' },
      { type: 'Psychic', tip: 'Darkness clouds the mind' }
    ],
    weak: [
      { type: 'Fighting', tip: 'Heroes beat villains' },
      { type: 'Bug', tip: 'Bugs creep in shadows' },
      { type: 'Fairy', tip: 'Light magic defeats dark' }
    ],
    icon: 'icons/dark.png'
  },
  Fairy: {
    strong: [
      { type: 'Fighting', tip: 'Magic outwits muscle' },
      { type: 'Dragon', tip: 'Fairy tales beat dragons' },
      { type: 'Dark', tip: 'Light magic defeats dark' }
    ],
    weak: [
      { type: 'Steel', tip: 'Iron wards off fairy magic' },
      { type: 'Poison', tip: 'Poison breaks enchantments' }
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

