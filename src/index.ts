import { agent, transit } from 'agentframework';

class ComponentA {
  name = 'Agent Framework';
}

@agent()
class ProjectA {
  @transit()
  private component!: ComponentA;

  constructor() {
    console.log(`WOW! You working on project ${this.component.name}!`);
  }
}

const project = new ProjectA();

console.log('Is it create from the ProjectA class?', project instanceof ProjectA);
