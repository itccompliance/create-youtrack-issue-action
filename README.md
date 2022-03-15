# Create YouTack Issue Action

Creates a new issue in a project on YouTrack via the YouTrack API.

## Usage

```yaml
uses: itccompliance/create-youtrack-issue-action@v1
with:
  service-url: https://youtrack.example.com
  token: ${{ secrets.YOUTRACK_API_TOKEN }}
  project-id: 0-0
  summary: My new issue
  description: Lorem ipsum dolor sit amet
  custom-fields: '[{"value":{"name":"Normal"},"name":"Priority","id":"92-1","$type":"SingleEnumIssueCustomField"}]'
```

## Outputs

- `issue-id`: The ID of the created issue
