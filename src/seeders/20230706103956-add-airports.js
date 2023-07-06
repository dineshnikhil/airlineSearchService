'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert('Airports', [
			{
				name: 'Kempegowda International Airport',
				cityId: 4,
				address: 'address',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'HAL Airport',
				cityId: 4,
				address: 'address',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Rajiv Gandhi International Airport',
				cityId: 1,
				address: 'address',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Nalgonda Airport',
				cityId: 1,
				address: 'address',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Chhatrapati Shivaji Maharaj International Airport',
				cityId: 3,
				address: 'address',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Navi Mumbai International Airport',
				cityId: 3,
				address: 'address',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Netaji Subhas Chandra Bose International Airport',
				cityId: 9,
				address: 'address',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Jay Prakash Narayan International Airport',
				cityId: 6,
				address: 'address',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
