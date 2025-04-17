# **Exercice : Implémentation d'un Système de Gestion des Urgences**

## **Contexte**
Vous devez concevoir un système de gestion des urgences permettant :
- L'enregistrement d'un incident par un utilisateur.
- L'affectation automatique d'une équipe d'intervention disponible.
- La mise à jour du statut d'un incident (à traiter, en cours, terminé).

Ce système suivra une **architecture en couches** et utilisera des **diagrammes UML** fournis pour modéliser son fonctionnement.

---

## **Objectifs de l'exercice**
1. **Comprendre** le système en s'appuyant sur les diagrammes UML fournis.
2. **Implémenter** un service REST permettant la création et la gestion des incidents.
3. **Gérer** l'affectation automatique des équipes d'intervention disponibles.
4. **Permettre la mise à jour du statut d'un incident** (à traiter, en cours, terminé).

---

## **Diagrammes UML**
Les diagrammes suivants sont fournis pour vous aider à comprendre la structure et le fonctionnement du système.

---

## **Détails de l'implémentation**

### **1. Développement de l'API REST**

À partir des diagrammes UML fournis, développez les fonctionnalités suivantes :
- **Endpoint pour créer un incident**.
- **Endpoint pour lister les incidents**.
- **Endpoint pour changer le statut d'un incident**.
- **Endpoint pour récupérer les équipes disponibles**.

### **2. Simulation d'un Scénario d'Urgence**

1. **Créer un incident via l'API**.
2. **Vérifier que le système assigne automatiquement une équipe disponible**.
3. **Modifier son statut à "En cours" puis "Terminé"**.
4. **S'assurer que l'équipe d'intervention redevient disponible après la fin de l'incident**.

---

## **Critères de Réussite**
Compréhension et utilisation correcte des diagrammes UML fournis.
API REST fonctionnelle avec endpoints bien définis.
Gestion correcte de l'affectation automatique des équipes.
Possibilité de modifier le statut des incidents.

---

**Conseil** : Respectez bien l'architecture en couches pour garantir une bonne séparation des responsabilités (Contrôleur → Service → Repository).

