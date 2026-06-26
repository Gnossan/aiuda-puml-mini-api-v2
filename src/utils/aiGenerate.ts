export async function generatePlantUML(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const plantuml = `@startuml
' Generated from prompt: ${prompt}
title Diagram generated from: ${prompt}
actor User
participant "System" as S
User -> S: Request based on "${prompt}"
S --> User: Response
@enduml`;
      resolve(plantuml);
    }, 1000);
  });
}

export async function explainPlantUML(code: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const explanation = `This PlantUML diagram contains:\n\n- A start and end marker (@startuml/@enduml)\n- ${code.split('\n').filter(line => line.trim().startsWith('actor') || line.trim().startsWith('participant') || line.trim().startsWith('entity')).length} component(s)\n- ${code.split('\n').filter(line => line.includes('->') || line.includes('-->')).length} interaction(s)\n\nThe diagram appears to show a basic flow between components.`;
      resolve(explanation);
    }, 1000);
  });
}
