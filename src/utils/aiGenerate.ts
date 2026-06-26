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
