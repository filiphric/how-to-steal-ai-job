## Jack Dorsey's vibe coding tips
https://engineering.block.xyz/blog/jack-dorseys-vibe-coding-tips
- Embrace the Learning Mindset Over Success Mindset

## You shall not pass - Gandalf
- fun moment - breaking chatgpt to break Gandalf

## What emotions do I speak to?
- fear -> hope
- confusion -> clarity
- pesimism -> activation

## Gergely Orosz
- what vibe-coding needs

## AI to coding is what cameras were to video
- films did not go away
- but a new category emerged

## Random thoughts
- A.I. is not secure - dude who was making security incidents before A.I.?
- every startup has a technical and non-technical co-founder - proof that expertise is still going to be needed
- "To zoom out a bit, a large language model (LLM) is an artificial intelligence model trained to predict and generate text by learning patterns from massive datasets" - https://docs.cursor.com/en/guides/working-with-context
- you wouldn’t want to have your signal lights operated by AI


## Main messages
- A.I. took my job, but I took it back
- I felt fear, confusion and pessimism
  - find out how does the audience feel
- change that to hope, clarity and activation

clarity - explain A.I., agents etc.
hope - the expertise is needed and testers have lot of skills already
activation - how to use A.I.

```mermaid
classDiagram
    title Managing Context with Sub Agents

    class MainAgent {
        <<Context>>
        System Instructions
        CLAUDE.md
        Claude Builtin Tools
        MCP Tools
        User message
        <<Tool Calls>>
        +Tasks()
        +Read()
        +Write()
    }

    class SubAgent {
        <<Context>>
        System Instructions
        CLAUDE.md
        Claude Builtin Tools
        MCP Tools
        User message
        <<Tool Calls>>
        +Read()
        +Search()
        <<Response>>
        Assistant Message
    }

    MainAgent ..> SubAgent : delegates via Tasks()

    note for MainAgent "Delegated task from Tasks():\n'Find where we load the user data from the database\nuse a subagent, and prompt it like this: ...'"

    note for SubAgent "Returns Assistant Message with result:\n'that file is in src/main/...'"
    ```