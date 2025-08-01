# Angular 17+ — Les essentiels pour bien maîtriser le framework

---

## 1. Composant = Brique LEGO

**Métaphore :** Imagine ton application comme un château fait de briques LEGO.  
**Explication :** Chaque composant est une brique représentant une partie de l’interface (bouton, carte, liste…).

```typescript
@Component({
  selector: 'app-brique',
  template: `<button>Je suis une brique</button>`,
  standalone: true
})
export class BriqueComponent {}
```

**À retenir :** Tout commence par les composants, autonomes et assemblables.

---

## 2. Services = Outils du Château

**Métaphore :** Les services sont comme les outils partagés entre les constructeurs (marteau, tournevis…).  
**Explication :** Un service gère la logique commune : récupération des données, gestion de l’état, communication avec le serveur.

```typescript
@Injectable({ providedIn: 'root' })
export class MarteauService {
  taper() { console.log('BAM !'); }
}
```

**À retenir :** Les services sont injectés dans les composants et évitent la duplication de code.

---

## 3. Data Binding = Communication entre briques

**Métaphore :** Le data binding, c’est comme les connecteurs entre les briques LEGO.  
**Explication :** Différents types de liaisons :
- **Interpolation** : `{{variable}}`
- **Property binding** : `[src]="image"`
- **Event binding** : `(click)="action()"`
- **Two-way binding** : `[(ngModel)]="valeur"`

```html
<input [(ngModel)]="nom">
<button (click)="direBonjour()">Dire bonjour</button>
```

---

## 4. Directives = Formes spéciales des briques

**Métaphore :** Les directives sont comme des autocollants ou des formes spéciales qu’on applique sur les briques.  
**Explication :** Elles modifient l’apparence ou le comportement d’un composant :
- **Structurelles** : `*ngIf`, `*ngFor`
- **Attributs** : `[ngClass]`, `[ngStyle]`

```html
<div *ngIf="visible">Je sors si visible</div>
<ul>
  <li *ngFor="let fruit of fruits">{{fruit}}</li>
</ul>
```

---

## 5. Routing = Portes du Château

**Métaphore :** Le routing, c’est comme les portes qui relient différentes salles du château.  
**Explication :** Il permet de naviguer entre différentes pages (composants).

```typescript
const routes = [
  { path: '', component: AccueilComponent },
  { path: 'salle', component: SalleComponent }
];
bootstrapApplication(AppComponent, { providers: [provideRouter(routes)] });
```

---

## 6. RxJS & Signals = Messagers du Royaume

**Métaphore :** RxJS et Signals sont comme des messagers qui transmettent les informations dans le royaume.  
**Explication :** 
- **RxJS** : pour les flux de données complexes (API, événements multiples).
- **Signals** : pour la réactivité locale, plus simple et rapide.

```typescript
count = signal(0);
increment() { this.count.update(x => x + 1); }
```

---

## 7. Formulaires = Boîtes à lettres

**Métaphore :** Les formulaires sont comme des boîtes à lettres où tes utilisateurs déposent des messages.  
**Explication :** Deux manières :
- **Template-driven** : rapide, simple
- **Reactive** : puissant, contrôle total

```typescript
form = new FormGroup({
  nom: new FormControl('')
});
```

---

## 8. Angular CLI = Chef d’orchestre

**Métaphore :** L’Angular CLI, c’est le chef d’orchestre qui dirige la construction du château.  
**Explication :** Il crée, teste et déploie ton app en quelques commandes :
- `ng new mon-chateau --standalone`
- `ng generate component brique --standalone`
- `ng serve`

---

## 9. Bonnes pratiques = Plans du Château

**Métaphore :** Toujours avoir un plan !  
**Explication :**
- Découper l’app en composants et services réutilisables
- Utiliser le typage TypeScript
- Tester régulièrement
- Privilégier les Standalone Components et Signals
- Modulariser le code

---

## 10. Hydration & SSR = Construction rapide et solide

**Métaphore :** Construire le château d’abord sur papier (serveur), puis le renforcer en vrai (client).  
**Explication :** Angular 17+ permet de générer du HTML côté serveur (SSR) puis de le “hydrater” côté client pour une meilleure performance.

---

# Résumé

- **Composants** : briques LEGO
- **Services** : outils partagés
- **Data binding** : connecteurs
- **Directives** : autocollants et formes
- **Routing** : portes du château
- **RxJS/Signals** : messagers
- **Formulaires** : boîtes à lettres
- **CLI** : chef d’orchestre
- **Best practices** : plans du château
- **SSR/Hydration** : construction rapide

---

**Maîtriser Angular, c’est savoir assembler et organiser ces briques pour bâtir des applications robustes, évolutives et performantes.**