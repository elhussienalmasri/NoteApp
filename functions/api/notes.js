import notes from "./data";

export function onRequestGet() {
    return Response.json(notes)
}

export async function onRequestPost({ request }) {
  const data = await request.json();

  const newNote = {
    id: notes.length + 1,
    tag: data.tag || 'Todo',
    title: data.title || 'Untitled',
    description: data.description || '',
    published_at: new Date(),
  };

  notes.push(newNote);

  return Response.json({ message: 'Note added', note: newNote });
}

// DELETE - Remove a note (by id)
export async function onRequestDelete({ request }) {
  const url = new URL(request.url);
  const id = parseInt(url.searchParams.get('id'));

  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) {
    return new Response(JSON.stringify({ error: 'Note not found' }), { status: 404 });
  }

  const deleted = notes.splice(index, 1)[0];
  return Response.json({ message: 'Note deleted', deleted });
}

// PUT - Update a note (by id)
export async function onRequestPut({ request }) {
  const data = await request.json();
  const id = data.id;

  const note = notes.find((n) => n.id === id);
  if (!note) {
    return new Response(JSON.stringify({ error: 'Note not found' }), { status: 404 });
  }

  Object.assign(note, {
    tag: data.tag ?? note.tag,
    title: data.title ?? note.title,
    description: data.description ?? note.description,
    tag: data.tag ?? note.tag,
  });


  return Response.json({ message: 'Note updated', note });
}