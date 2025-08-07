# Project Guidelines for Claude

## Development Approach
1. Take each step granularly - complete one component or feature at a time
2. Update the implementation plan (_docs/development-docs/2-implementation_plan.md) after completing each step
3. Create a git commit after each completed step
4. When encountering errors related to imports, libraries, or any other issues, ALWAYS search the web first before attempting fixes

## Commit Strategy
- Commit after each completed component
- Commit after each major feature implementation
- Use clear, descriptive commit messages

## Error Resolution
- ONLY use WebSearch when encountering actual errors or issues
- First action on any error: WebSearch for the specific error message
- Check official documentation via web search
- Look for recent solutions and best practices
- Do NOT search for general implementation approaches - just implement directly

## Testing
- Run `npm run build` before committing to ensure no build errors
- Check for TypeScript errors
- Verify the development server runs without issues