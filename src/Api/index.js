/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* global fetch, fetchInformation */
/* eslint no-undef: "error" */
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './data'
const mockedData = false
const userId = 18 // recupérer de la barre d'adresse
const server = 'http://localhost:3000/user/' + userId

export async function fetchInformation () {
  if (mockedData) return USER_MAIN_DATA.find(user => user.userId === userId)
  let response
  let data
  try {
    response = await fetch(server)
    data = await response.json()
    return data
  } catch (err) {
    console.log('----- Error -----', err)
  }
}

export async function fetchActivity () {
  if (mockedData) return USER_ACTIVITY.find(user => user.userId === userId)
  let response
  let data
  try {
    response = await fetch(server + '/activity')
    data = await response.json()
    const newData = formatActivityData({
      sessions: data.data.sessions,
      day: data.data.sessions.day,
      kilogram: data.data.sessions.kilogram,
      calories: data.data.sessions.calories
    })
    return newData
  } catch (err) {
    console.log('----- Error -----', err)
  }
}

export async function fetchAverageSession () {
  if (mockedData) return USER_AVERAGE_SESSIONS.find(user => user.userId === userId)
  let response
  let data
  try {
    response = await fetch(server + '/average-sessions')
    data = await response.json()
    const newData = formatSessionDays({
      sessions: data.data.sessions,
      day: data.data.sessions.day,
      sessionLength: data.data.sessions.sessionLength
    })
    return newData
  } catch (err) {
    console.log('----- Error -----', err)
  }
}

export async function fetchAverageSessionScore () {
  if (mockedData) return USER_AVERAGE_SESSIONS.find(user => user.userId === userId)
  let response
  let data
  try {
    response = await fetch(server + '/average-sessions')
    data = await response.json()
    return data.data.sessions
  } catch (err) {
    console.log('----- Error -----', err)
  }
}

export async function fetchPerformance () {
  if (mockedData) return USER_PERFORMANCE.find(user => user.userId === userId)
  let response
  let data
  try {
    response = await fetch(server + '/performance')
    data = await response.json()
    const newData = formatPerformanceData({
      data: data.data.data,
      kind: data.data.kind
    })
    newData.reverse()
    return newData
  } catch (err) {
    console.log('----- Error -----', err)
  }
}
const translation = {
  cardio: 'Cardio',
  energy: 'Energie',
  endurance: 'Endurance',
  strength: 'Force',
  speed: 'Vitesse',
  intensity: 'Intensité'
}

function formatPerformanceData (dataOriginal) {
  const { kind, data } = dataOriginal
  const newData = []
  data.forEach(perf => {
    newData.push({
      value: perf.value,
      kind: translation[kind[perf.kind]]
    })
  })
  return newData
}

function formatActivityData (dataOriginal) {
  const { sessions } = dataOriginal
  const newData = []
  let date
  sessions.forEach(sess => {
    date = new Date(sess.day)
    newData.push({
      day: date.getDate(),
      kilogram: sess.kilogram,
      calories: sess.calories
    })
  })
  return newData
}

const jour = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D'
}

function formatSessionDays (dataOriginal) {
  const { sessions } = dataOriginal
  const newData = []
  sessions.forEach(sess => {
    newData.push({
      day: jour[sess.day],
      sessionLength: sess.sessionLength
    })
    console.log(newData)
  })
  return newData
}
