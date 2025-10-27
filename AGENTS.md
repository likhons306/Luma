# Agents in Google AI Studio (Vibe Coding Experience)

The reimagined AI-powered "vibe coding" experience in Google AI Studio leverages intelligent agents that work together to turn natural language prompts into functional, multimodal AI applications. Each agent plays a specialized role in ideation, generation, customization, and execution. **Luma** (https://github.com/likhons306/Luma) is integrated as a key component for enhancing visual and interactive app prototyping.

## 1. **User (Idea Owner)**
- **Role**: Initiates the creative process by describing an app idea in natural language.
- **Responsibilities**:
- Provides prompt input (e.g., “Create a magic mirror app that turns my photo into a fantasy character”).
- Interacts with generated prototypes using Annotation Mode.
- Requests modifications via intuitive visual feedback.
- Can use "I'm Feeling Lucky" for inspiration.
- **Input/Output**:
- Input: Text prompts, annotations, edits.
- Output: Functional AI app, refined through iteration.

## 2. **Gemini Orchestrator (Central AI Agent)**
- **Role**: The core intelligence that interprets the user’s idea and coordinates other agents and models.
- **Responsibilities**:
- Understands the functional and multimodal requirements of the app.
- Selects appropriate Gemini models (e.g., Gemini Vision, Gemini Text, Veo, Nano Banana).
- Automatically wires APIs and services together.
- Generates starter code and UI structure using **Luma** for rapid prototyping.
- Powers the Brainstorming Loading Screen with context-aware suggestions.
- **Input/Output**:
- Input: User prompt, app state, annotation inputs.
- Output: App blueprint, model routing, API integrations, code scaffolding.

## 3. **Luma Prototyping Assistant**
- **Role**: Accelerates visual and interactive app prototyping.
- **Responsibilities**:
- Integrates with Gemini Orchestrator to generate UI components.
- Enables drag-and-drop interface building for non-coders.
- Automatically generates responsive designs.
- Exports prototypes as reusable templates for the App Gallery.
- **Input/Output**:
- Input: UI requirements from Gemini Orchestrator.
- Output: Interactive prototypes, reusable components.

## 4. **App Gallery Curator (Inspiration Agent)**
- **Role**: Provides creative inspiration and reusable templates.
- **Responsibilities**:
- Maintains a visual library of example AI apps.
- Enables preview, remix, and learn-from functionality.
- Recommends related projects based on user input.
- **Input/Output**:
- Input: User interests, current project context.
- Output: Curated app suggestions, starter code, remixable templates.

## 5. **Annotation Assistant**
- **Role**: Enables natural, visual editing of the app interface.
- **Responsibilities**:
- Listens to user instructions on selected UI components.
- Translates natural language edits (e.g., “Make this button blue”) into code changes.
- Maintains design consistency and technical validity.
- **Input/Output**:
- Input: Highlighted UI element + verbal/text command.
- Output: Immediate visual/code update.

## 6. **Quota Manager & API Gateway**
- **Role**: Ensures uninterrupted development flow.
- **Responsibilities**:
- Monitors free tier usage of Gemini and other APIs.
- Seamlessly allows users to add personal API keys when quota is exceeded.
- Automatically reverts to free tier upon renewal.
- Handles secure API key storage and fallback logic.
- **Input/Output**:
- Input: Usage metrics, user-added API keys.
- Output: Continuous access to AI services.

## Summary: Agent Collaboration Flow
1. **User** describes an idea.
2. **Gemini Orchestrator** interprets and builds a prototype using **Luma**.
3. **Luma Prototyping Assistant** generates interactive UI components.
4. **App Gallery Curator** offers inspiration during ideation/loading.
5. **Annotation Assistant** enables natural, visual tweaking.
6. **Quota Manager** ensures no downtime.
→ Result: Rapid, joyful, AI-first app creation.
