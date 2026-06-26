export const pumlExamples = {
  sequence: `@startuml
Alice -> Bob: Hello
Bob --> Alice: Hi
@enduml`,
  class: `@startuml
class Animal {
  +name: String
  +speak(): void
}
@enduml`,
  usecase: `@startuml
:User: --> (Login)
:User: --> (Logout)
@enduml`
};
